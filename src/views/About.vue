<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <div class="text-center mb-8">
          <h1 class="text-h3 font-weight-bold mb-4">About Advisory System</h1>
          <p class="text-h6 text--secondary">Learn more about our career counseling platform</p>
        </div>

        <v-card class="pa-6 mb-6" elevation="2">
          <v-card-title class="text-h5 mb-4">Our Mission</v-card-title>
          <v-card-text class="text-body-1">
            <p class="mb-4">
              The Advisory System is a comprehensive career counseling platform designed to help students 
              and professionals discover their ideal career paths through scientific assessment tools and 
              personalized guidance.
            </p>
            <p class="mb-4">
              We believe that everyone has unique talents and potential. Our mission is to help individuals 
              understand their strengths, interests, and career opportunities to make informed decisions 
              about their future.
            </p>
          </v-card-text>
        </v-card>

        <v-card class="pa-6 mb-6" elevation="2">
          <v-card-title class="text-h5 mb-4">What We Offer</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <div class="feature-item mb-4">
                  <v-icon color="primary" class="mr-3">mdi-compass-outline</v-icon>
                  <strong>Career Exploration</strong>
                  <p class="mt-2">Discover career paths that match your interests and skills</p>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="feature-item mb-4">
                  <v-icon color="primary" class="mr-3">mdi-brain</v-icon>
                  <strong>Skills Assessment</strong>
                  <p class="mt-2">Evaluate your competencies and identify areas for improvement</p>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="feature-item mb-4">
                  <v-icon color="primary" class="mr-3">mdi-school-outline</v-icon>
                  <strong>Learning Recommendations</strong>
                  <p class="mt-2">Get personalized suggestions for skill development</p>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="feature-item mb-4">
                  <v-icon color="primary" class="mr-3">mdi-chart-line</v-icon>
                  <strong>Progress Tracking</strong>
                  <p class="mt-2">Monitor your career development journey</p>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card class="pa-6" elevation="2">
          <v-card-title class="text-h5 mb-4">Contact Information</v-card-title>
          <v-card-text>
            <p class="mb-2"><strong>Email:</strong> support@advisorysystem.edu</p>
            <p class="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p class="mb-2"><strong>Address:</strong> 123 Education Street, Learning City, LC 12345</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  metaInfo: {
    title: 'About - Advisory System'
  }
}
</script>

<style scoped>
.feature-item {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.feature-item .v-icon {
  margin-bottom: 8px;
}
</style>
