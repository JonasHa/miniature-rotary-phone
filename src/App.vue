<template>
  <v-app class="animate__animated animate__fadeIn">
    <v-app-bar
      :elevation="scrolled ? 8 : 0"
      :color="scrolled ? 'white' : 'transparent'"
      app
      class="header-bar"
      :class="{ 'header-scrolled': scrolled }"
      flat
    >
      <v-container class="d-flex align-center py-2">
        <div class="d-flex align-center logo-container">
          <div class="logo-icon-wrapper">
            <v-icon color="primary" size="36" class="logo-icon">mdi-airplane-takeoff</v-icon>
          </div>
          <div class="ml-3">
            <h1 class="logo-text text-h5 font-weight-black mb-0">Skyviator</h1>
            <p class="logo-subtitle text-caption mb-0 opacity-70">{{ t('header.tagline') }}</p>
          </div>
        </div>

        <v-spacer />

        <div class="d-none d-md-flex align-center nav-links">
          <v-btn variant="text" class="nav-link mx-1">
            <v-icon start>mdi-home</v-icon>
            {{ t('header.home') }}
          </v-btn>
          <v-btn variant="text" class="nav-link mx-1">
            <v-icon start>mdi-compass</v-icon>
            {{ t('header.explore') }}
          </v-btn>
          <v-btn variant="text" class="nav-link mx-1">
            <v-icon start>mdi-ticket-percent</v-icon>
            {{ t('header.deals') }}
          </v-btn>
          <v-btn variant="text" class="nav-link mx-1">
            <v-icon start>mdi-information</v-icon>
            {{ t('header.about') }}
          </v-btn>
        </div>

        <v-btn
          color="primary"
          variant="flat"
          class="ml-4 d-none d-md-flex book-now-btn"
          size="large"
          rounded="lg"
        >
          <v-icon start>mdi-calendar-check</v-icon>
          {{ t('header.bookNow') }}
        </v-btn>

        <v-app-bar-nav-icon
          class="d-md-none"
          @click="mobileMenuOpen = !mobileMenuOpen"
        />
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="mobileMenuOpen"
      temporary
      location="right"
      class="mobile-drawer"
    >
      <v-list class="py-4">
        <v-list-item class="mb-4">
          <div class="d-flex align-center">
            <v-icon color="primary" size="32">mdi-airplane-takeoff</v-icon>
            <h2 class="text-h6 font-weight-bold ml-3 text-primary">Skyviator</h2>
          </div>
        </v-list-item>

        <v-divider class="mb-2" />

        <v-list-item link class="mobile-nav-item">
          <template v-slot:prepend>
            <v-icon>mdi-home</v-icon>
          </template>
          <v-list-item-title>{{ t('header.home') }}</v-list-item-title>
        </v-list-item>

        <v-list-item link class="mobile-nav-item">
          <template v-slot:prepend>
            <v-icon>mdi-compass</v-icon>
          </template>
          <v-list-item-title>{{ t('header.explore') }}</v-list-item-title>
        </v-list-item>

        <v-list-item link class="mobile-nav-item">
          <template v-slot:prepend>
            <v-icon>mdi-ticket-percent</v-icon>
          </template>
          <v-list-item-title>{{ t('header.deals') }}</v-list-item-title>
        </v-list-item>

        <v-list-item link class="mobile-nav-item">
          <template v-slot:prepend>
            <v-icon>mdi-information</v-icon>
          </template>
          <v-list-item-title>{{ t('header.about') }}</v-list-item-title>
        </v-list-item>

        <v-divider class="my-4" />

        <v-list-item>
          <v-btn color="primary" block size="large" variant="flat" rounded="lg">
            <v-icon start>mdi-calendar-check</v-icon>
            {{ t('header.bookNow') }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-5">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <v-footer class="footer-gradient text-white">
      <v-container class="py-12">
        <v-row class="mb-8">
          <v-col cols="12" md="5" class="mb-6 mb-md-0">
            <div class="footer-brand">
              <div class="d-flex align-center mb-4">
                <div class="footer-logo-wrapper">
                  <v-icon size="40" class="footer-logo-icon">mdi-airplane-takeoff</v-icon>
                </div>
                <h3 class="text-h5 font-weight-black ml-3">Skyviator</h3>
              </div>
              <p class="text-body-1 mb-4 footer-description">
                {{ t('footer.description') }}
              </p>
              <div class="d-flex gap-2 mb-4">
                <v-btn
                  icon
                  size="large"
                  variant="outlined"
                  color="white"
                  class="social-btn"
                  href="#"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  icon
                  size="large"
                  variant="outlined"
                  color="white"
                  class="social-btn"
                  href="#"
                >
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn
                  icon
                  size="large"
                  variant="outlined"
                  color="white"
                  class="social-btn"
                  href="#"
                >
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                  icon
                  size="large"
                  variant="outlined"
                  color="white"
                  class="social-btn"
                  href="#"
                >
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="7">
            <v-row>
              <v-col cols="6" md="4" class="mb-4">
                <h4 class="text-h6 font-weight-bold mb-4 footer-heading">
                  {{ t('footer.quickLinks') }}
                </h4>
                <div class="d-flex flex-column footer-links">
                  <a href="#" class="footer-link mb-3">
                    <v-icon size="small" class="mr-2">mdi-chevron-right</v-icon>
                    {{ t('footer.aboutUs') }}
                  </a>
                  <a href="#" class="footer-link mb-3">
                    <v-icon size="small" class="mr-2">mdi-chevron-right</v-icon>
                    {{ t('footer.contact') }}
                  </a>
                  <a href="#" class="footer-link mb-3">
                    <v-icon size="small" class="mr-2">mdi-chevron-right</v-icon>
                    {{ t('header.deals') }}
                  </a>
                  <a href="#" class="footer-link">
                    <v-icon size="small" class="mr-2">mdi-chevron-right</v-icon>
                    {{ t('footer.careers') }}
                  </a>
                </div>
              </v-col>

              <v-col cols="6" md="4" class="mb-4">
                <h4 class="text-h6 font-weight-bold mb-4 footer-heading">
                  {{ t('footer.support') }}
                </h4>
                <div class="d-flex flex-column footer-links">
                  <a href="#" class="footer-link mb-3">
                    <v-icon size="small" class="mr-2">mdi-chevron-right</v-icon>
                    {{ t('footer.helpCenter') }}
                  </a>
                  <a href="#" class="footer-link mb-3">
                    <v-icon size="small" class="mr-2">mdi-chevron-right</v-icon>
                    {{ t('footer.faq') }}
                  </a>
                  <a href="#" class="footer-link mb-3">
                    <v-icon size="small" class="mr-2">mdi-chevron-right</v-icon>
                    {{ t('footer.terms') }}
                  </a>
                  <a href="#" class="footer-link">
                    <v-icon size="small" class="mr-2">mdi-chevron-right</v-icon>
                    {{ t('footer.privacy') }}
                  </a>
                </div>
              </v-col>

              <v-col cols="12" md="4" class="mb-4">
                <h4 class="text-h6 font-weight-bold mb-4 footer-heading">
                  {{ t('footer.newsletter') }}
                </h4>
                <p class="text-body-2 mb-3 opacity-90">
                  {{ t('footer.newsletterText') }}
                </p>
                <v-text-field
                  variant="outlined"
                  density="compact"
                  :placeholder="t('footer.emailPlaceholder')"
                  hide-details
                  class="mb-2 newsletter-input"
                  bg-color="rgba(255,255,255,0.1)"
                  color="white"
                >
                  <template v-slot:append-inner>
                    <v-btn
                      icon
                      size="small"
                      variant="flat"
                      color="white"
                      class="newsletter-btn"
                    >
                      <v-icon color="primary">mdi-send</v-icon>
                    </v-btn>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-divider class="footer-divider mb-6" />

        <v-row align="center">
          <v-col cols="12" md="6" class="text-center text-md-left mb-3 mb-md-0">
            <p class="text-body-2 mb-0 footer-copyright">
              {{ t('footer.copyright', { year: currentYear }) }}
            </p>
          </v-col>
          <v-col cols="12" md="6" class="text-center text-md-right">
            <div class="d-flex justify-center justify-md-end align-center gap-4 footer-payment">
              <v-icon size="32" class="opacity-70">mdi-credit-card</v-icon>
              <v-icon size="32" class="opacity-70">mdi-apple</v-icon>
              <v-icon size="32" class="opacity-70">mdi-google-pay</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const currentYear = computed(() => new Date().getFullYear())

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// Listen for localStorage changes on __wll key
const handleStorageChange = (e: StorageEvent) => {
  console.log('Storage event detected:', e)
  if (e.key === '__wll' && e.newValue) {
    const newLocale = e.newValue.toLowerCase()
    if (['en', 'es', 'fr', 'sv'].includes(newLocale)) {
      locale.value = newLocale
    }
  }
}

// Poll for same-tab localStorage changes
let lastWllValue = localStorage.getItem('__wll')
const pollStorageChange = () => {
  const currentWllValue = localStorage.getItem('__wll')
  if (currentWllValue !== lastWllValue) {
    lastWllValue = currentWllValue
    console.log('Detected __wll change (same tab):', currentWllValue)
    if (currentWllValue) {
      const newLocale = currentWllValue.toLowerCase()
      if (['en', 'es', 'fr', 'sv'].includes(newLocale)) {
        locale.value = newLocale
      }
    }
  }
}

let pollInterval: number | null = null

const checkInitialLanguage = () => {
  const wllValue = localStorage.getItem('__wll')
  console.log('Checking initial __wll value', wllValue)
  if (wllValue) {
    locale.value = wllValue
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('storage', handleStorageChange)
  checkInitialLanguage()
  // Poll every 500ms for same-tab changes
  pollInterval = window.setInterval(pollStorageChange, 500)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('storage', handleStorageChange)
  if (pollInterval) {
    clearInterval(pollInterval)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Header Styles */
.header-bar {
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid transparent;
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.95) !important;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.logo-container {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.logo-container:hover {
  transform: translateY(-2px);
}

.logo-icon-wrapper {
  background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
}

.logo-icon {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-5px) rotate(-5deg);
  }
}

.logo-text {
  background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.logo-subtitle {
  color: #6b7280;
  font-weight: 500;
}

.nav-link {
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0.2px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  transform: translateY(-2px);
  color: #9333ea;
}

.book-now-btn {
  box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
  transition: all 0.2s ease;
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.book-now-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(147, 51, 234, 0.4);
}

.mobile-drawer {
  background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
}

.mobile-nav-item {
  border-radius: 12px;
  margin: 4px 8px;
  transition: all 0.2s ease;
}

.mobile-nav-item:hover {
  background: rgba(147, 51, 234, 0.08);
  transform: translateX(4px);
}

/* Footer Styles */
.footer-gradient {
  background: linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #a855f7 100%);
  position: relative;
  overflow: hidden;
}

.footer-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
}

.footer-brand {
  position: relative;
  z-index: 1;
}

.footer-logo-wrapper {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.footer-logo-icon {
  animation: float 3s ease-in-out infinite;
}

.footer-description {
  opacity: 0.95;
  line-height: 1.6;
  max-width: 400px;
}

.social-btn {
  border-width: 2px;
  transition: all 0.2s ease;
}

.social-btn:hover {
  background: rgba(255, 255, 255, 1);
  color: #9333ea;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.footer-heading {
  position: relative;
  padding-bottom: 8px;
  margin-bottom: 16px !important;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
}

.footer-links {
  position: relative;
  z-index: 1;
}

.footer-link {
  color: white;
  text-decoration: none;
  opacity: 0.9;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
}

.footer-link:hover {
  opacity: 1;
  transform: translateX(4px);
  text-decoration: underline;
}

.newsletter-input :deep(.v-field) {
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.newsletter-input :deep(.v-field:hover) {
  border-color: rgba(255, 255, 255, 0.5);
}

.newsletter-input :deep(.v-field--focused) {
  border-color: rgba(255, 255, 255, 0.8);
}

.newsletter-input :deep(input) {
  color: white;
}

.newsletter-input :deep(input::placeholder) {
  color: rgba(255, 255, 255, 0.7);
}

.newsletter-btn {
  transition: all 0.2s ease;
}

.newsletter-btn:hover {
  transform: scale(1.1) rotate(15deg);
}

.footer-divider {
  background: rgba(255, 255, 255, 0.2);
  height: 2px;
}

.footer-copyright {
  opacity: 0.9;
  font-weight: 500;
}

.footer-payment {
  position: relative;
  z-index: 1;
}
</style>
