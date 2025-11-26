<template>
  <div class="min-h-screen">
    <HeroHome />
    <SpecialsHome class="bg-gray-100" />
    <RecommendHome class="bg-white" />
  </div>
</template>

<script setup lang="ts">
import HeroHome from "../components/Home/hero.home.vue";
import RecommendHome from "../components/Home/recommend.home.vue";
import SpecialsHome from "../components/Home/specials.home.vue";
</script>
