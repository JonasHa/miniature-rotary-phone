<template>
  <v-row
    align="center"
    justify="center"
    class="bg-cover bg-center bg-gray-500 pt-24 pb-5 sm:p-[5%]"
    :style="{
      backgroundImage: `url(${require('../../assets/images/hero.png')})`,
    }"
    no-gutters
  >
    <v-col cols="12" xl="8" lg="8">
      <v-container>
        <p
          class="text-4xl md:text-5xl font-semibold text-white text-center sm:text-left sm:leading-tight"
        >
          Fly with Ease! Start your journey now!
        </p>
      </v-container>
    </v-col>
    <SearchWidget class="mb-6 px-4" />
  </v-row>
</template>

<script setup lang="ts">
import SearchWidget from "./searchwidget.home.vue";
</script>
