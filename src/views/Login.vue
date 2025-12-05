<template>
  <v-container class="py-4">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="5" lg="4">
        <v-card elevation="2">
          <div class="bg-primary pa-3 text-center">
            <span class="text-white text-body-1 font-weight-bold">{{ $t('auth.loginTitle') }}</span>
          </div>
          <v-card-text class="pa-4">
            <p class="text-body-2 text-grey mb-3">{{ $t('auth.loginSubtitle') }}</p>
            <v-form @submit.prevent="handleLogin">
              <v-text-field 
                v-model="username" 
                :label="$t('auth.username')" 
                prepend-icon="mdi-account" 
                type="text"
                density="compact"
                variant="outlined"
                required
              ></v-text-field>
              <v-text-field 
                v-model="password" 
                :label="$t('auth.password')" 
                prepend-icon="mdi-lock" 
                type="password"
                density="compact"
                variant="outlined"
                required
              ></v-text-field>
              <div class="text-center mt-3">
                <v-btn color="primary" type="submit" :loading="loading" block>
                  {{ loading ? $t('auth.loggingIn') : $t('auth.loginButton') }}
                </v-btn>
              </div>
            </v-form>
            <div class="text-center mt-3">
              <span class="text-caption text-grey">{{ $t('auth.noAccount') }}</span>
              <router-link to="/register" class="ml-1 text-caption">{{ $t('auth.registerNow') }}</router-link>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar.show" :color="snackbar.color">
      {{ snackbar.text }}
      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar.show = false">{{ $t('common.close') }}</v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { auth } from '../store/auth'
import { API_URL } from '../config/api'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      snackbar: {
        show: false,
        text: '',
        color: 'error'
      }
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true
      try {
        const response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: this.username, password: this.password })
        })
        const data = await response.json()

        if (data.success && data.accessToken && data.refreshToken) {
          auth.login(data.user, data.accessToken, data.refreshToken)
          this.showSnackbar(this.$t('auth.loginSuccess'), 'success')

          const redirectPath = sessionStorage.getItem('redirectAfterLogin')
          if (redirectPath) {
            sessionStorage.removeItem('redirectAfterLogin')
            this.$router.push(redirectPath)
          } else {
            this.$router.push({ name: 'Home' })
          }
        } else {
          this.showSnackbar(data.message || 'Login failed', 'error')
        }
      } catch (error) {
        this.showSnackbar('An error occurred', 'error')
      } finally {
        this.loading = false
      }
    },
    showSnackbar(text, color) {
      this.snackbar.text = text
      this.snackbar.color = color
      this.snackbar.show = true
    }
  }
}
</script>
