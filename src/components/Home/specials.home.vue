<template>
  <div class="pt-8">
    <p class="text-3xl md:text-4xl font-semibold text-center">
      Special Upcoming Offers
    </p>
    <br />

    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" xl="4" lg="4" />
      <v-col cols="12" xl="4" lg="4">
        <div class="p-2 mx-[10%] bg-white h-[8vh] rounded-[13px]">
          <SpecialTab @update-value="updateTab" :tab="tab" :tabs="tabs" />
        </div>
      </v-col>
      <v-col cols="12" xl="4" lg="4" />
    </v-row>
    <br />

    <v-container>
      <v-row v-if="tab === 1" no-gutters>
        <v-col
          cols="12"
          v-for="(item, index) in specials.team"
          :key="index"
          xl="4"
          lg="4"
        >
          <SpecialCard :info="item" />
        </v-col>
      </v-row>
      <v-row v-else-if="tab === 2" no-gutters>
        <v-col
          cols="12"
          v-for="(item, index) in specials.couple"
          :key="index"
          xl="4"
          lg="4"
        >
          <SpecialCard :info="item" />
        </v-col>
      </v-row>
      <v-row v-else no-gutters>
        <v-col
          cols="12"
          v-for="(item, index) in specials.family"
          :key="index"
          xl="4"
          lg="4"
        >
          <SpecialCard :info="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SpecialCard from "./utilities/special.card.vue";
import SpecialTab from "./utilities/special.tab.vue";

interface SpecialOffer {
  img: string;
  date: string;
  tag: string;
  title: string;
  price: number;
  duration: string;
}

const tab = ref(1);

const tabs = {
  team: 1,
  couple: 2,
  family: 3,
};

const specials: Record<"team" | "couple" | "family", SpecialOffer[]> = {
  team: [
    {
      img: require("../../assets/images/special1.png"),
      date: "14 FEB 2022",
      tag: "Relax",
      title: "Loga Sea",
      price: 700,
      duration: "3 Days, 3 Nights",
    },
    {
      img: require("../../assets/images/special2.png"),
      date: "18 JUN 2022",
      tag: "Adventure",
      title: "Ansgar Scheffold",
      price: 400,
      duration: "4 Days, 3 Nights",
    },
    {
      img: require("../../assets/images/special3.png"),
      date: "22 DEC 2022",
      tag: "Relax",
      title: "Lona X",
      price: 340,
      duration: "7 Days, 6 Nights",
    },
  ],
  couple: [
    {
      img: require("../../assets/images/special1.png"),
      date: "14 FEB 2022",
      tag: "Relax",
      title: "Loga Sea",
      price: 350,
      duration: "3 Days, 3 Nights",
    },
    {
      img: require("../../assets/images/special2.png"),
      date: "18 JUN 2022",
      tag: "Adventure",
      title: "Ansgar Scheffold",
      price: 200,
      duration: "4 Days, 3 Nights",
    },
    {
      img: require("../../assets/images/special3.png"),
      date: "22 DEC 2022",
      tag: "Relax",
      title: "Lona X",
      price: 150,
      duration: "7 Days, 6 Nights",
    },
  ],
  family: [
    {
      img: require("../../assets/images/special1.png"),
      date: "14 FEB 2022",
      tag: "Relax",
      title: "Loga Sea",
      price: 450,
      duration: "3 Days, 3 Nights",
    },
    {
      img: require("../../assets/images/special2.png"),
      date: "18 JUN 2022",
      tag: "Adventure",
      title: "Ansgar Scheffold",
      price: 350,
      duration: "4 Days, 3 Nights",
    },
    {
      img: require("../../assets/images/special3.png"),
      date: "22 DEC 2022",
      tag: "Relax",
      title: "Lona X",
      price: 300,
      duration: "7 Days, 6 Nights",
    },
  ],
};

const updateTab = (value: number) => {
  tab.value = value;
};
</script>
