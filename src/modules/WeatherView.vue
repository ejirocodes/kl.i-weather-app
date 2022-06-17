<script setup lang="ts">
import WeatherInfo from '../components/weather/WeatherInfo.vue';
import { ref, inject, onMounted, reactive } from 'vue';
import type { AxiosStatic } from 'axios';
import { getWeather } from '@/services/weather.searvice';
import type { Weather } from '@/types/interfact';

const $axios = inject('$axios') as AxiosStatic;
const cordinates = reactive({
  lat: 0,
  lng: 0,
});
const weather = ref<Weather | null>(null);

function generateRandomLatLng() {
  const lat = (Math.random() * (90 - -90) + -90).toFixed(2);
  const lng = (Math.random() * (180 - -180) + -180).toFixed(2);
  cordinates.lat = Number(lat);
  cordinates.lng = Number(lng);
  return { lat, lng };
}

const getRandomWeather = async () => {
  try {
    generateRandomLatLng();
    const { data } = await getWeather($axios, cordinates.lat, cordinates.lng);
    weather.value = data;
    console.log(weather.value);
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  getRandomWeather();
});
</script>

<template>
  <main
    class="tw-flex tw-min-h-screen tw-w-full tw-flex-col tw-justify-between tw-bg-white tw-p-8 sm:tw-flex-row"
  >
    <div class="tw-w-1/2 tw-bg-[#EFEFF0]">
      <h1 class="tw-text-8xl tw-font-semibold">
        Weather &amp; Forecast
        <span
          ><img src="@/assets/img/weather.svg" alt="Weather" class="tw-w-20"
        /></span>
        Application
      </h1>
      <button
        @click="getRandomWeather"
        class="tw-rounded-full tw-bg-pri tw-px-10 tw-py-4 tw-text-white tw-shadow-lg tw-shadow-pri/25 tw-transition-all hover:tw-shadow-md hover:tw-shadow-pri/30 active:tw-scale-95 active:tw-shadow-md active:tw-shadow-pri/0"
      >
        Random weather
      </button>
    </div>
    <div class="tw-w-[60%] tw-bg-gray1" v-if="weather">
      <WeatherInfo :weather="weather" />
    </div>
  </main>
</template>

<style scoped></style>
