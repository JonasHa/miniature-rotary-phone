<template>
  <div>
    <v-row align="center" justify="center" no-gutters>
      <span class="w-1/3">
        <v-btn
          :color="localTab === 1 ? 'blue' : 'black'"
          @click="handleTabClick(1)"
          :elevation="0"
          :plain="localTab !== 1"
          class="mr-1 normal-case text-xs w-full h-[6vh]"
          dark
        >
          Team
        </v-btn>
      </span>
      <span class="w-1/3">
        <v-btn
          :color="localTab === 2 ? 'blue' : 'black'"
          @click="handleTabClick(2)"
          :elevation="0"
          :plain="localTab !== 2"
          class="mr-1 normal-case text-xs w-full h-[6vh]"
          dark
        >
          Couple
        </v-btn>
      </span>
      <span class="w-1/3">
        <v-btn
          :color="localTab === 3 ? 'blue' : 'black'"
          @click="handleTabClick(3)"
          :elevation="0"
          :plain="localTab !== 3"
          class="mr-1 normal-case text-xs w-full h-[6vh]"
          dark
        >
          Family
        </v-btn>
      </span>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Tabs {
  team: number;
  couple: number;
  family: number;
}

const props = defineProps<{
  tab: number;
  tabs: Tabs;
}>();

const emit = defineEmits<{
  "update-value": [value: number];
}>();

const localTab = ref(props.tab);

watch(
  () => props.tab,
  (newVal) => {
    localTab.value = newVal;
  }
);

const handleTabClick = (value: number) => {
  localTab.value = value;
  emit("update-value", value);
};
</script>
