<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <div class="text-center mb-8">
          <h1 class="text-h3 font-weight-bold mb-4">Frequently Asked Questions</h1>
          <p class="text-h6 text--secondary">Find answers to common questions about our platform</p>
        </div>

        <v-text-field
          v-model="searchQuery"
          label="Search FAQs"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          class="mb-6"
          clearable
        ></v-text-field>
        <v-expansion-panels class="mb-6">
          <!-- General Questions -->
          <v-expansion-panel v-if="!searchQuery || 'what is the advisory system and how does it work'.toLowerCase().includes(searchQuery.toLowerCase())">
            <template v-slot:title>
              <div class="d-flex align-center">
                <v-icon class="mr-3" color="primary">mdi-help-circle</v-icon>
                What is the Advisory System and how does it work?
              </div>
            </template>
            <template v-slot:text>
              <p>The Advisory System is a comprehensive career counseling platform designed to help students and professionals discover their ideal career paths through scientific assessment tools and personalized guidance.</p>
              <p><strong>How it works:</strong></p>
              <ul>
                <li><strong>Step 1:</strong> Create your personal profile with academic background, skills, and interests</li>
                <li><strong>Step 2:</strong> Complete our comprehensive career assessment tests</li>
                <li><strong>Step 3:</strong> Receive detailed results and career matching analysis</li>
                <li><strong>Step 4:</strong> Get personalized learning recommendations and career guidance</li>
              </ul>
              <p>Our platform uses validated psychometric assessments combined with machine learning algorithms to provide accurate career recommendations based on your unique profile.</p>
            </template>
          </v-expansion-panel>

          <v-expansion-panel v-if="!searchQuery || 'who can benefit from using this platform'.toLowerCase().includes(searchQuery.toLowerCase())">
            <template v-slot:title>
              <div class="d-flex align-center">
                <v-icon class="mr-3" color="primary">mdi-account-question</v-icon>
                Who can benefit from using this platform?
              </div>
            </template>
            <template v-slot:text>
              <p>The Advisory System is designed for a wide range of users:</p>
              <ul>
                <li><strong>High School Students:</strong> Exploring college majors and future career paths</li>
                <li><strong>College Students:</strong> Confirming their chosen field or considering alternatives</li>
                <li><strong>Recent Graduates:</strong> Transitioning from education to the workforce</li>
                <li><strong>Working Professionals:</strong> Looking to change careers or advance in their current field</li>
                <li><strong>Career Changers:</strong> Individuals seeking new opportunities in different industries</li>
                <li><strong>Return-to-Work Individuals:</strong> Re-entering the workforce after a break</li>
              </ul>
              <p>The platform is suitable for all education levels and career stages, from high school to executive level.</p>
            </template>
          </v-expansion-panel>

          <!-- Assessment Questions -->
          <v-expansion-panel v-if="!searchQuery || 'how long does the complete assessment take'.toLowerCase().includes(searchQuery.toLowerCase())">
            <template v-slot:title>
              <div class="d-flex align-center">
                <v-icon class="mr-3" color="orange">mdi-clock</v-icon>
                How long does the complete assessment take?
              </div>
            </template>
            <template v-slot:text>
              <p>The assessment consists of multiple components with varying completion times:</p>
              <ul>
                <li><strong>Quick Assessment:</strong> 15-20 minutes (basic career matching)</li>
                <li><strong>Standard Assessment:</strong> 45-60 minutes (comprehensive evaluation)</li>
                <li><strong>Premium Assessment:</strong> 90-120 minutes (in-depth analysis with personality profiling)</li>
              </ul>
              <p><strong>Assessment Components:</strong></p>
              <ul>
                <li>Interest Inventory (15-20 minutes)</li>
                <li>Skills Assessment (20-25 minutes)</li>
                <li>Personality Test (20-30 minutes)</li>
                <li>Work Values Assessment (10-15 minutes)</li>
                <li>Cognitive Abilities Test (15-20 minutes) - Premium only</li>
              </ul>
              <p><strong>Important:</strong> You can save your progress and return to complete the assessment later. We recommend taking it when you have uninterrupted time for the most accurate results.</p>
            </template>
          </v-expansion-panel>

          <v-expansion-panel v-if="!searchQuery || 'can i retake the assessment'.toLowerCase().includes(searchQuery.toLowerCase())">
            <template v-slot:title>
              <div class="d-flex align-center">
                <v-icon class="mr-3" color="orange">mdi-refresh</v-icon>
                Can I retake the assessment? How often should I do it?
              </div>
            </template>
            <template v-slot:text>
              <p>Absolutely! We encourage users to retake assessments periodically as interests and circumstances change.</p>
              <p><strong>Retaking Guidelines:</strong></p>
              <ul>
                <li><strong>Minimum Wait Time:</strong> 30 days between full assessments (to ensure meaningful changes)</li>
                <li><strong>Recommended Frequency:</strong> Every 6-12 months or after significant life changes</li>
                <li><strong>Quick Reassessment:</strong> Available anytime for interest or skills updates</li>
              </ul>
              <p><strong>When to Retake:</strong></p>
              <ul>
                <li>After completing education or training programs</li>
                <li>When gaining significant work experience</li>
                <li>During major life transitions</li>
                <li>When considering career changes</li>
                <li>After developing new skills or interests</li>
              </ul>
              <p><strong>Progress Tracking:</strong> Your results history is saved, allowing you to track changes in your career profile over time.</p>
            </template>
          </v-expansion-panel>

          <!-- Technical Questions -->
          <v-expansion-panel v-if="!searchQuery || 'is my personal information secure'.toLowerCase().includes(searchQuery.toLowerCase())">
            <template v-slot:title>
              <div class="d-flex align-center">
                <v-icon class="mr-3" color="orange">mdi-shield-check</v-icon>
                Is my personal information secure and private?
              </div>
            </template>
            <template v-slot:text>
              <p>Yes, we take data privacy and security very seriously. Here's how we protect your information:</p>
              <p><strong>Data Security Measures:</strong></p>
              <ul>
                <li><strong>Encryption:</strong> All data is encrypted in transit (SSL/TLS) and at rest (AES-256)</li>
                <li><strong>Secure Infrastructure:</strong> Hosted on enterprise-grade cloud servers with 99.9% uptime</li>
                <li><strong>Access Controls:</strong> Multi-factor authentication and role-based access for all staff</li>
                <li><strong>Regular Audits:</strong> Third-party security audits conducted quarterly</li>
                <li><strong>Compliance:</strong> GDPR and CCPA compliant with regular compliance reviews</li>
              </ul>
              <p><strong>Privacy Commitments:</strong></p>
              <ul>
                <li>We never sell, trade, or rent your personal information to third parties</li>
                <li>Your assessment results are only visible to you unless you explicitly share them</li>
                <li>You can delete your account and all associated data at any time</li>
                <li>Anonymous aggregated data may be used for research to improve our services</li>
              </ul>
            </template>
          </v-expansion-panel>

          <v-expansion-panel v-if="!searchQuery || 'can i export and share my results'.toLowerCase().includes(searchQuery.toLowerCase())">
            <template v-slot:title>
              <div class="d-flex align-center">
                <v-icon class="mr-3" color="orange">mdi-export</v-icon>
                Can I export and share my results?
              </div>
            </template>
            <template v-slot:text>
              <p>Yes! We provide multiple options for exporting and sharing your career assessment results:</p>
              <p><strong>Export Formats Available:</strong></p>
              <ul>
                <li><strong>PDF Reports:</strong> Professional, printable reports with full analysis</li>
                <li><strong>Excel/CSV:</strong> Data export for further analysis or record keeping</li>
                <li><strong>Web Link:</strong> Shareable URL with privacy controls</li>
                <li><strong>Infographic:</strong> Visual summary for social media or presentations</li>
              </ul>
              <p><strong>Report Types:</strong></p>
              <ul>
                <li><strong>Summary Report:</strong> 2-3 page overview of key findings (Free)</li>
                <li><strong>Comprehensive Report:</strong> 15-20 page detailed analysis (Standard/Premium)</li>
                <li><strong>Skills Assessment Report:</strong> Focus on competencies and development areas</li>
                <li><strong>Career Action Plan:</strong> Step-by-step roadmap with timelines</li>
                <li><strong>Progress Report:</strong> Changes over time if you've retaken assessments</li>
              </ul>
              <p><strong>Sharing Options:</strong></p>
              <ul>
                <li>Share with career counselors, mentors, or family members</li>
                <li>Include in job applications or portfolio</li>
                <li>Present to academic advisors for course planning</li>
                <li>Privacy controls: choose what information to include when sharing</li>
              </ul>
            </template>
          </v-expansion-panel>

          <!-- Pricing Questions -->
          <v-expansion-panel v-if="!searchQuery || 'what are the costs and subscription options'.toLowerCase().includes(searchQuery.toLowerCase())">
            <template v-slot:title>
              <div class="d-flex align-center">
                <v-icon class="mr-3" color="green">mdi-currency-usd</v-icon>
                What are the costs and subscription options?
              </div>
            </template>
            <template v-slot:text>
              <p>We offer flexible pricing options to suit different needs and budgets:</p>
              <p><strong>Free Tier:</strong></p>
              <ul>
                <li>Basic career assessment (30 questions)</li>
                <li>General career recommendations</li>
                <li>Access to career exploration resources</li>
                <li>Basic skills assessment</li>
              </ul>
              <p><strong>Standard Plan ($19/month or $190/year):</strong></p>
              <ul>
                <li>Comprehensive assessment suite</li>
                <li>Detailed career matching and analysis</li>
                <li>Personalized learning recommendations</li>
                <li>Progress tracking and results history</li>
                <li>PDF report downloads</li>
                <li>Email support</li>
              </ul>
              <p><strong>Premium Plan ($39/month or $390/year):</strong></p>
              <ul>
                <li>All Standard features plus:</li>
                <li>Advanced personality profiling</li>
                <li>One-on-one career counseling sessions (2 per month)</li>
                <li>Industry-specific insights and trends</li>
                <li>Priority support (phone and email)</li>
                <li>Customized action plans</li>
                <li>Networking and mentorship opportunities</li>
              </ul>
              <p><strong>Student Discount:</strong> 50% off all plans with valid student ID verification.</p>
            </template>
          </v-expansion-panel>

          <!-- Results Questions -->
          <v-expansion-panel v-if="!searchQuery || 'how accurate are the career recommendations'.toLowerCase().includes(searchQuery.toLowerCase())">
            <template v-slot:title>
              <div class="d-flex align-center">
                <v-icon class="mr-3" color="green">mdi-chart-line</v-icon>
                How accurate are the career recommendations and what do they include?
              </div>
            </template>
            <template v-slot:text>
              <p>Our recommendations are based on extensive research and validated assessment tools with high accuracy rates:</p>
              <p><strong>Accuracy Statistics:</strong></p>
              <ul>
                <li><strong>Career Match Accuracy:</strong> 85-92% based on user feedback after 12 months</li>
                <li><strong>Skills Assessment Reliability:</strong> 0.89 coefficient (industry standard is 0.70+)</li>
                <li><strong>Personality Assessment Validity:</strong> Based on Big Five model with 0.85+ correlation</li>
              </ul>
              <p><strong>What's Included in Your Results:</strong></p>
              <ul>
                <li><strong>Career Matches:</strong> Top 10-20 careers ranked by compatibility percentage</li>
                <li><strong>Detailed Analysis:</strong> Why each career matches your profile</li>
                <li><strong>Skills Gap Analysis:</strong> What skills you need to develop for target careers</li>
                <li><strong>Educational Pathways:</strong> Recommended degrees, certifications, and courses</li>
                <li><strong>Salary Information:</strong> Expected income ranges for each career</li>
                <li><strong>Job Market Outlook:</strong> Growth projections and employment trends</li>
                <li><strong>Work Environment Fit:</strong> Company cultures and work styles that suit you</li>
              </ul>
              <p><strong>Important Note:</strong> While highly accurate, our recommendations should be used as guidance alongside your personal research, experiences, and consultations with career counselors.</p>
            </template>
          </v-expansion-panel>

          <!-- Education Questions -->
          <v-expansion-panel v-if="!searchQuery || 'what types of educational and learning recommendations'.toLowerCase().includes(searchQuery.toLowerCase())">
            <template v-slot:title>
              <div class="d-flex align-center">
                <v-icon class="mr-3" color="green">mdi-school</v-icon>
                What types of educational and learning recommendations do you provide?
              </div>
            </template>
            <template v-slot:text>
              <p>We provide comprehensive educational guidance tailored to your career goals and current skill level:</p>
              <p><strong>Formal Education Recommendations:</strong></p>
              <ul>
                <li><strong>Degree Programs:</strong> Bachelor's, Master's, and PhD programs aligned with career goals</li>
                <li><strong>Community College Options:</strong> Associate degrees and certificate programs</li>
                <li><strong>Trade Schools:</strong> Vocational training for skilled trades</li>
                <li><strong>Online Universities:</strong> Accredited distance learning options</li>
              </ul>
              <p><strong>Professional Development:</strong></p>
              <ul>
                <li><strong>Industry Certifications:</strong> IT, Project Management, Healthcare, Finance, etc.</li>
                <li><strong>Professional Licenses:</strong> Requirements for regulated professions</li>
                <li><strong>Continuing Education:</strong> Requirements to maintain credentials</li>
                <li><strong>Professional Associations:</strong> Membership benefits and networking opportunities</li>
              </ul>
              <p><strong>Skills Development:</strong></p>
              <ul>
                <li><strong>Online Courses:</strong> Coursera, Udemy, LinkedIn Learning, etc.</li>
                <li><strong>Bootcamps:</strong> Intensive training in coding, data science, digital marketing</li>
                <li><strong>Workshops and Seminars:</strong> Short-term skill building opportunities</li>
                <li><strong>Mentorship Programs:</strong> Connecting with industry professionals</li>
              </ul>
              <p><strong>Customized Learning Paths:</strong> Step-by-step roadmaps showing the optimal sequence of education and training to reach your career goals.</p>
            </template>
          </v-expansion-panel>

          <!-- Support Questions -->
          <v-expansion-panel v-if="!searchQuery || 'do you offer career counseling and personal support'.toLowerCase().includes(searchQuery.toLowerCase())">
            <template v-slot:title>
              <div class="d-flex align-center">
                <v-icon class="mr-3" color="green">mdi-account-supervisor</v-icon>
                Do you offer career counseling and personal support?
              </div>
            </template>
            <template v-slot:text>
              <p>Yes! We offer multiple levels of personal support to help you navigate your career journey:</p>
              <p><strong>Self-Service Resources:</strong></p>
              <ul>
                <li><strong>Knowledge Base:</strong> Comprehensive articles on career topics</li>
                <li><strong>Video Tutorials:</strong> Step-by-step guides for using the platform</li>
                <li><strong>Webinars:</strong> Regular sessions on career development topics</li>
                <li><strong>Community Forums:</strong> Connect with other users and share experiences</li>
              </ul>
              <p><strong>Professional Counseling Services:</strong></p>
              <ul>
                <li><strong>Standard Plan:</strong> Email support with certified career counselors (48-hour response)</li>
                <li><strong>Premium Plan:</strong> One-on-one video sessions (2 per month, 45 minutes each)</li>
                <li><strong>À la carte:</strong> Additional counseling sessions available for purchase ($75/session)</li>
              </ul>
              <p><strong>Specialized Support:</strong></p>
              <ul>
                <li><strong>Industry Experts:</strong> Counselors with experience in specific fields</li>
                <li><strong>Student Services:</strong> Academic and career planning for students</li>
                <li><strong>Executive Coaching:</strong> Leadership development and senior-level career transitions</li>
                <li><strong>Career Transition Support:</strong> Specialized help for major career changes</li>
              </ul>
              <p><strong>Group Programs:</strong></p>
              <ul>
                <li>Monthly career development workshops</li>
                <li>Industry-specific networking events</li>
                <li>Job search strategy groups</li>
                <li>Interview preparation sessions</li>
              </ul>
            </template>
          </v-expansion-panel>

          <!-- Mobile App Questions -->
          <v-expansion-panel v-if="!searchQuery || 'is there a mobile app'.toLowerCase().includes(searchQuery.toLowerCase())">
            <template v-slot:title>
              <div class="d-flex align-center">
                <v-icon class="mr-3" color="orange">mdi-cellphone</v-icon>
                Is there a mobile app? What devices are supported?
              </div>
            </template>
            <template v-slot:text>
              <p>Our platform is designed to work seamlessly across all devices:</p>
              <p><strong>Web Platform:</strong></p>
              <ul>
                <li><strong>Responsive Design:</strong> Optimized for desktop, tablet, and mobile browsers</li>
                <li><strong>Supported Browsers:</strong> Chrome, Firefox, Safari, Edge (latest 2 versions)</li>
                <li><strong>Operating Systems:</strong> Windows, macOS, Linux, iOS, Android</li>
                <li><strong>Internet Required:</strong> Stable connection recommended for assessments</li>
              </ul>
              <p><strong>Mobile Apps (Coming Q2 2025):</strong></p>
              <ul>
                <li><strong>iOS App:</strong> Available in App Store (iOS 14.0+)</li>
                <li><strong>Android App:</strong> Available in Google Play Store (Android 8.0+)</li>
                <li><strong>Offline Mode:</strong> Download assessments and complete without internet</li>
                <li><strong>Push Notifications:</strong> Reminders and updates</li>
              </ul>
              <p><strong>Features Available on Mobile:</strong></p>
              <ul>
                <li>Complete assessments with touch-optimized interface</li>
                <li>View results and recommendations</li>
                <li>Access learning resources and articles</li>
                <li>Schedule counseling sessions</li>
                <li>Track progress and goals</li>
              </ul>
              <p><strong>Accessibility:</strong> Full compliance with WCAG 2.1 AA standards for users with disabilities.</p>
            </template>
          </v-expansion-panel>

          <!-- Integration Questions -->
          <v-expansion-panel v-if="!searchQuery || 'does the platform integrate with other career services'.toLowerCase().includes(searchQuery.toLowerCase())">
            <template v-slot:title>
              <div class="d-flex align-center">
                <v-icon class="mr-3" color="green">mdi-link-variant</v-icon>
                Does the platform integrate with other career services and job boards?
              </div>
            </template>
            <template v-slot:text>
              <p>Yes! We've built partnerships and integrations to provide a comprehensive career ecosystem:</p>
              <p><strong>Job Board Integrations:</strong></p>
              <ul>
                <li><strong>LinkedIn:</strong> Import profile data and post achievements</li>
                <li><strong>Indeed:</strong> Search and apply for jobs matching your career profile</li>
                <li><strong>Glassdoor:</strong> Company reviews and salary information</li>
                <li><strong>ZipRecruiter:</strong> Targeted job recommendations</li>
                <li><strong>AngelList:</strong> Startup and tech company opportunities</li>
              </ul>
              <p><strong>Learning Platform Partnerships:</strong></p>
              <ul>
                <li><strong>Coursera:</strong> Direct enrollment in recommended courses</li>
                <li><strong>Udemy:</strong> Discounted access to skill-building courses</li>
                <li><strong>LinkedIn Learning:</strong> Integrated learning path recommendations</li>
                <li><strong>Pluralsight:</strong> Technical skills development</li>
              </ul>
              <p><strong>University Partnerships:</strong></p>
              <ul>
                <li>Over 200 colleges and universities use our platform</li>
                <li>Direct admission information and application links</li>
                <li>Financial aid and scholarship information</li>
                <li>Transfer credit evaluation</li>
              </ul>
              <p><strong>Professional Development:</strong></p>
              <ul>
                <li><strong>Certification Bodies:</strong> Direct links to certification programs</li>
                <li><strong>Professional Associations:</strong> Membership benefits and requirements</li>
                <li><strong>Mentorship Networks:</strong> Connect with industry professionals</li>
              </ul>
            </template>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-card class="pa-6" elevation="2">
          <v-card-title class="text-h5 mb-4">Still have questions?</v-card-title>
          <v-card-text>
            <p class="mb-4">
              If you can't find the answer you're looking for, please don't hesitate to contact our support team.
            </p>
            <v-btn color="primary" size="large" prepend-icon="mdi-email">
              Contact Support
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      searchQuery: ''
    }
  },
  metaInfo: {
    title: 'FAQ - Advisory System'
  }
}
</script>
