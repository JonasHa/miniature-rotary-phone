<template>
  <v-row align="center" justify="center" class="hero pt-10" no-gutters>
    <v-col cols="12" xl="8" lg="8">
      <v-container>
        <p class="font-1  font-title white--text">Fly with Ease! Start your journey now!</p>
      </v-container>
    </v-col>
    <Search class="mb-6 px-4" />
  </v-row>
</template>

<script>
import Search from './search.vue';

export default {
  name: 'Hero',

  components: {
    Search
  },
}
</script>
<style>
.hero {
  background: url('../../assets/images/hero.png');
  padding-top: 100px;
  padding-bottom: 20px;
  background-size: cover;
  background-color: grey;
  background-size: cover;
}

.font-title {
  font-weight: 600;
  text-align: center;
}

.font-desc {
  font-weight: 500;
  text-align: center;
}

@media screen and (max-width:600px) {
  .hero {
    padding: 5%;
  }

  .font-title {
    text-align: left;
    line-height: 1.2;
  }

  .font-desc {
    font-weight: 500;
    text-align: left;
  }
}
</style>
