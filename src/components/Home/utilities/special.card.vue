<template>
  <div>
    <v-card
      class="p-2 h-[70vh] sm:h-[50vh] rounded-[45px] m-[5%]"
      color="white"
      flat
    >
      <div class="h-[65%]">
        <v-row class="h-full p-4" no-gutters>
          <v-col cols="10">
            <v-img eager :src="info.img"></v-img>
          </v-col>
          <v-col cols="2">
            <p
              class="[writing-mode:vertical-rl] tracking-[7px] ml-5 text-xs mt-5"
            >
              {{ info.date }}
            </p>
          </v-col>
        </v-row>
      </div>

      <div class="h-[35%] px-[6%] py-[3%] sm:py-[2%]">
        <v-row align="center" justify="center" no-gutters>
          <v-chip color="red lighten-5" class="px-3 h-auto sm:h-[18px]" small>
            <span class="text-xs text-red">{{ info.tag }}</span>
          </v-chip>
          <p class="mb-0 ml-3 text-xs text-gray-600">{{ info.duration }}</p>
          <v-spacer></v-spacer>
        </v-row>

        <div class="mt-2">
          <p class="text-lg font-semibold">{{ info.title }}</p>
          <v-row no-gutters align="center" justify="center">
            <p class="text-lg font-medium mb-0">
              {{ info.price }}$<span class="text-xs text-gray-600"
                >/Person</span
              >
            </p>
            <v-spacer></v-spacer>
            <v-btn
              elevation="0"
              class="normal-case text-xs hidden sm:flex"
              color="blue lighten-5 blue--text"
            >
              Book Now
            </v-btn>
            <v-btn
              small
              elevation="0"
              class="normal-case text-xs flex sm:hidden"
              color="blue lighten-5 blue--text"
            >
              Book Now
            </v-btn>
          </v-row>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
interface SpecialInfo {
  img: string;
  date: string;
  tag: string;
  title: string;
  price: number;
  duration: string;
}

defineProps<{
  info: SpecialInfo;
}>();
</script>
