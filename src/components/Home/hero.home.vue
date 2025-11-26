<template>
  <div
    class="relative py-6 flex items-center bg-cover bg-center"
    :style="{
      backgroundImage: `url(/src/assets/images/hero.png)`,
    }"
  >
    <div
      class="absolute inset-0 bg-linear-to-br from-slate-900/70 via-purple-900/50 to-slate-900/70"
    ></div>
    <v-container class="relative z-10">
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="12" lg="10" xl="8">
          <div class="text-center space-y-6 mb-12 animate-in">
            <div class="inline-block">
              <span
                class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-4"
              >
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                {{ $t('hero.badge') }}
              </span>
            </div>
            <h1
              class="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
            >
              {{ $t('hero.title') }}
              <span
                class="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                >{{ $t('hero.titleHighlight') }}</span
              >
            </h1>
            <p class="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light">
              {{ $t('hero.subtitle') }}
            </p>
          </div>
        </v-col>
        <v-col cols="12" lg="10" xl="8">
          <div class="glass-effect rounded-2xl shadow-2xl animate-in">
            <SearchWidget />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <SearchResult />
</template>

<script setup lang="ts">
import SearchResult from './searchresultwidget.home.vue'
import SearchWidget from './searchwidget.home.vue'
</script>
