<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6" elevation="4">
          <v-card-title class="text-h4 text-center mb-4">
            <v-icon left color="primary">mdi-clipboard-list</v-icon>
            Career Assessment Test
          </v-card-title>

          <v-card-subtitle class="text-center mb-4">
            Question {{ currentQuestion + 1 }} / {{ questions.length }}
          </v-card-subtitle>

          <v-progress-linear :model-value="progress" color="primary" height="8" class="mb-6"></v-progress-linear>

          <div v-if="loading" class="text-center py-8">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
            <p class="mt-4">Loading questions...</p>
          </div>

          <div v-else-if="!showResults && questions.length > 0">
            <v-card class="pa-4 mb-6" elevation="2">
              <v-card-text class="text-h6">
                {{ questions[currentQuestion].question }}
              </v-card-text>
            </v-card>

            <v-radio-group v-model="answers[currentQuestion]" class="mb-6">
              <v-radio v-for="(option, index) in questions[currentQuestion].options" :key="index" :value="option.value"
                class="mb-2">
                <template v-slot:label>
                  <span class="text-body-1">{{ option.text }}</span>
                </template>
              </v-radio>
            </v-radio-group>

            <v-card-actions class="justify-space-between">
              <v-btn color="secondary" :disabled="currentQuestion === 0" @click="previousQuestion"
                prepend-icon="mdi-arrow-left">
                Previous
              </v-btn>

              <v-btn v-if="currentQuestion < questions.length - 1" color="primary" :disabled="!answers[currentQuestion]"
                @click="nextQuestion" append-icon="mdi-arrow-right">
                Next
              </v-btn>

              <v-btn v-else color="success" :disabled="!answers[currentQuestion]" @click="finishTest"
                prepend-icon="mdi-check">
                Complete
              </v-btn>
            </v-card-actions>
          </div>

          <div v-else-if="showResults" class="text-center">
            <v-icon color="success" size="64">mdi-check-circle</v-icon>
            <h3 class="text-h5 mt-4 mb-4">Assessment completed!</h3>
            <v-btn color="primary" size="large" :to="{ name: 'Results' }" prepend-icon="mdi-chart-line">
              View Results
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { auth } from '../store/auth'
import { API_ENDPOINTS } from '../config/api'

export default {
  name: 'CareerTest',
  data() {
    return {
      currentQuestion: 0,
      answers: {},
      showResults: false,
      questions: [],
      loading: true
    }
  },
  computed: {
    progress() {
      return ((this.currentQuestion + 1) / this.questions.length) * 100
    }
  },
  async mounted() {
    await this.loadQuestions()
    const savedAnswers = localStorage.getItem('careerTestAnswers')
    if (savedAnswers) {
      this.answers = JSON.parse(savedAnswers)
    }
  },
  methods: {
    async loadQuestions() {
      try {
        const response = await fetch(API_ENDPOINTS.QUESTIONS)
        const data = await response.json()
        if (data.success) {
          this.questions = data.questions
        }
      } catch (error) {
        console.error('Failed to load questions:', error)
        this.questions = []
      } finally {
        this.loading = false
      }
    },
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++
      }
      this.saveAnswers()
    },
    previousQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--
      }
    },
    saveAnswers() {
      localStorage.setItem('careerTestAnswers', JSON.stringify(this.answers))
    },
    async finishTest() {
      this.saveAnswers()
      await this.calculateResults()
      this.showResults = true
    },
    async calculateResults() {
      const answerCounts = {}
      Object.values(this.answers).forEach(answer => {
        answerCounts[answer] = (answerCounts[answer] || 0) + 1
      })

      const results = this.generateCareerRecommendations(answerCounts)
      localStorage.setItem('careerResults', JSON.stringify(results))

      if (auth.isLoggedIn && auth.user && auth.accessToken) {
        try {
          const response = await fetch(API_ENDPOINTS.TEST_RESULTS, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': auth.getAuthHeader()
            },
            body: JSON.stringify({
              userId: auth.user.id,
              answers: this.answers,
              results
            })
          })
          const data = await response.json()
          if (data.success) {
            console.log('Test results saved to database')
          }
        } catch (error) {
          console.error('Failed to save test results:', error)
        }
      }

      return results
    },
    generateCareerRecommendations(answerCounts) {
      const careers = {
        technology: {
          title: "Information Technology",
          careers: ["Programmer", "Software Engineer", "Data Scientist", "DevOps Engineer"],
          description: "Suitable for those who love technology and solving technical problems"
        },
        business: {
          title: "Business & Management",
          careers: ["Project Manager", "Business Analyst", "Marketing Manager", "Business Consultant"],
          description: "Suitable for those with management skills and business understanding"
        },
        creative: {
          title: "Creative & Design",
          careers: ["UI/UX Designer", "Graphic Designer", "Content Creator", "Architect"],
          description: "Suitable for those with creativity and aesthetic sense"
        },
        social: {
          title: "Social & People",
          careers: ["Human Resources", "Psychologist", "Teacher", "Social Worker"],
          description: "Suitable for those who enjoy interaction and helping others"
        },
        analytical: {
          title: "Analysis & Research",
          careers: ["Data Analyst", "Researcher", "Accountant", "Financial Specialist"],
          description: "Suitable for those with logical thinking and love for analysis"
        }
      }

      const fieldScores = {
        technology: 0,
        business: 0,
        creative: 0,
        social: 0,
        analytical: 0
      }

      if (answerCounts.technical || answerCounts.data || answerCounts.tech_learning) {
        fieldScores.technology += (answerCounts.technical || 0) + (answerCounts.data || 0) + (answerCounts.tech_learning || 0)
      }

      if (answerCounts.management || answerCounts.business || answerCounts.market_trends) {
        fieldScores.business += (answerCounts.management || 0) + (answerCounts.business || 0) + (answerCounts.market_trends || 0)
      }

      if (answerCounts.creative || answerCounts.design || answerCounts.arts_design) {
        fieldScores.creative += (answerCounts.creative || 0) + (answerCounts.design || 0) + (answerCounts.arts_design || 0)
      }

      if (answerCounts.social || answerCounts.people || answerCounts.human_psychology) {
        fieldScores.social += (answerCounts.social || 0) + (answerCounts.people || 0) + (answerCounts.human_psychology || 0)
      }

      if (answerCounts.analytical || answerCounts.data || answerCounts.detailed) {
        fieldScores.analytical += (answerCounts.analytical || 0) + (answerCounts.data || 0) + (answerCounts.detailed || 0)
      }

      const sortedFields = Object.entries(fieldScores)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([field, score]) => ({
          field,
          score,
          ...careers[field]
        }))

      return {
        topRecommendations: sortedFields,
        answerSummary: answerCounts
      }
    }
  }
}
</script>
