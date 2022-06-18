<script setup lang="ts">
import WeatherInfo from '../components/weather/WeatherInfo.vue';
import { ref, inject, onMounted, reactive } from 'vue';
import type { AxiosStatic } from 'axios';
import { getWeather } from '@/services/weather.searvice';
import type { Weather } from '@/types/interfact';
import { generateRandomLatLng } from '@/utils/latlng.utils';

const $axios = inject('$axios') as AxiosStatic;
const cordinates = reactive({
  lat: 0,
  lng: 0,
});
const weather = ref<Weather | null>(null);
const isLoading = ref(false);

const getRandomWeather = async () => {
  try {
    isLoading.value = true;
    const { lat, lng } = generateRandomLatLng();
    cordinates.lat = lat;
    cordinates.lng = lng;
    const { data } = await getWeather($axios, cordinates.lat, cordinates.lng);
    weather.value = data;
    console.log(weather.value);
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
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
    <div class="tw-w-1/2 tw-bg-[#EFEFF0] tw-p-8">
      <h1 class="tw-mb-10 tw-text-8xl tw-font-semibold tw-leading-[6.5rem]">
        Weather &amp;
        <span class="tw-text-primary tw-text-bold tw-flex tw-items-center"
          >Forecast
          <img
            src="@/assets/img/weather.svg"
            alt="Weather"
            class="tw-ml-4 tw-w-20"
        /></span>
        Application
      </h1>
      <p class="tw-mb-10 tw-text-lg tw-text-gray-500">
        Stay updated with weather information, use the weather app to get
        information about daily forecast on-the-fly.
      </p>
      <button
        data-test="random-weather-btn"
        :disabled="isLoading"
        @click="getRandomWeather"
        :class="{
          'tw-min-w-[208px] !tw-cursor-not-allowed !tw-opacity-50': isLoading,
        }"
        class="tw-rounded-full tw-bg-pri tw-px-10 tw-py-4 tw-text-white tw-shadow-lg tw-shadow-pri/25 tw-transition-all hover:tw-shadow-md hover:tw-shadow-pri/30 active:tw-scale-95 active:tw-shadow-md active:tw-shadow-pri/0"
      >
        {{ isLoading ? 'Processing...' : 'Random weather' }}
      </button>
    </div>
    <div class="tw-w-[60%] tw-bg-gray1" v-if="weather">
      <WeatherInfo :weather="weather" />
    </div>
  </main>
</template>

<style scoped></style>
