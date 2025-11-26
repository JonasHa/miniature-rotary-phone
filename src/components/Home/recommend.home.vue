<template>
  <div class="p-[4%] sm:p-[12%]">
    <p class="text-3xl md:text-4xl font-semibold text-center">
      Recommended Destination
    </p>
    <br />

    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" xl="4" lg="4" />
      <v-col cols="12" xl="4" lg="4">
        <div class="p-2 mx-[8%] h-[8vh] rounded-[13px]">
          <RecommendTab @update-value="updateTab" :tab="tab" :tabs="tabs" />
        </div>
      </v-col>
      <v-col cols="12" xl="4" lg="4" />
    </v-row>

    <br />
    <v-row>
      <v-col
        v-for="(item, index) in recommends"
        :key="index"
        cols="12"
        xl="3"
        lg="3"
      >
        <RecommendCard :img="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RecommendCard from "./utilities/recommend.card.vue";
import RecommendTab from "./utilities/recommend.tab.vue";

interface RecommendItem {
  img: string;
  rating: number;
}

const tab = ref(1);

const tabs = {
  team: 1,
  couple: 2,
  family: 3,
};

const recommends: RecommendItem[] = [
  { img: require("../../assets/images/dest1.png"), rating: 3.4 },
  { img: require("../../assets/images/dest2.png"), rating: 4.5 },
  { img: require("../../assets/images/dest3.png"), rating: 4.2 },
  { img: require("../../assets/images/dest4.png"), rating: 4.2 },
];

const updateTab = (value: number) => {
  tab.value = value;
};
</script>
