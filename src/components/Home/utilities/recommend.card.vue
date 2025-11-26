<template>
  <div>
    <v-card hover class="white h-[40vh] rounded-[35px]">
      <div class="h-[70%] p-[4%] relative">
        <v-img :src="img.img"></v-img>
        <div class="absolute top-[10%] right-[10%]">
          <v-row no-gutters>
            <v-spacer></v-spacer>
            <v-chip color="white" class="font-semibold" x-small>
              <v-rating
                class="-ml-2"
                color="yellow darken-1"
                length="1"
                x-small
                dense
                :value="5"
                v-model="rating"
              />
              {{ img.rating }}
            </v-chip>
          </v-row>
        </div>
      </div>
      <div class="p-[4%] sm:p-[10%_5%] h-[30%]">
        <p class="mb-0 text-base font-semibold">Kina Mountain</p>
        <p class="mb-0 mt-2 text-xs text-gray-600 font-semibold">
          <v-icon color="red" class="-mt-1" size="15">mdi-map-marker</v-icon>
          Cambodia
        </p>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface RecommendImage {
  img: string;
  rating: number;
}

defineProps<{
  img: RecommendImage;
}>();

const rating = ref(1);
</script>
