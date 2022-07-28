<template>
  <div>
   <heroHomeVue />
  <div class="bg-1">
     <specialsHomeVue />

  </div>
  </div>
</template>

<script>
import heroHomeVue from '../components/Home/hero.home.vue'
import specialsHomeVue from '../components/Home/specials.home.vue'
// import recommendHomeVue from '../components/Home/recommend.home.vue'

export default {
  name: 'Home',

  components: {
    heroHomeVue,
    specialsHomeVue,
    // recommendHomeVue,
  },
}
</script>
<style>

</style>
