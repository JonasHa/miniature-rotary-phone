<template>
  <v-app class="animate__animated animate__fadeIn animate__slow">
    <v-app-bar
      :color="scrolled ? 'white' : 'transparent'"
      :elevation="scrolled ? 4 : 0"
      class="transition-all duration-300"
      fixed
      flat
    >
      <div class="flex items-center">
        <p
          class="text-2xl font-semibold mb-0 py-1.5 transition-colors duration-300"
          :class="scrolled ? 'text-gray-800' : 'text-white'"
        >
          Skyviator
        </p>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="bg-gray-900">
      <v-container>
        <div class="hidden md:block">
          <v-row no-gutters class="py-8">
            <p class="text-sm text-gray-400">
              {{ new Date().getFullYear() }} Skyviator © All rights reserved
            </p>
            <v-spacer></v-spacer>
          </v-row>
        </div>
        <v-row no-gutters class="block md:hidden py-16 w-full">
          <v-spacer></v-spacer>
          <div>
            <p class="text-sm text-gray-400 text-center">
              {{ new Date().getFullYear() }} Skyviator © All rights reserved
            </p>
          </div>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import "./css/fonts.css";

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
