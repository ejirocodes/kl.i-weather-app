<script setup lang="ts">
import WeatherInfo from '../components/weather/WeatherInfo.vue';
import { ref, inject, onMounted, reactive } from 'vue';
import type { AxiosStatic } from 'axios';
import { getWeather, getWeatherLatLng } from '@/services/weather.searvice';
import type { Weather } from '@/types/interfact';
import { generateRandomLatLng } from '@/utils/latlng.utils';
import SpinnerMd from '@/components/shared/SpinnerMd.vue';
import SearchInput from '@/components/shared/SearchInput.vue';
import ErrorDisplay from '@/components/shared/ErrorDisplay.vue';

const $axios = inject('$axios') as AxiosStatic;
const cordinates = reactive({
  lat: 0,
  lng: 0,
});
const weather = ref<Weather | null>(null);
const errorMessage = ref<string>('');
const isLoading = ref(false);

const getRandomWeather = async () => {
  try {
    isLoading.value = true;
    const { lat, lng } = generateRandomLatLng();
    cordinates.lat = lat;
    cordinates.lng = lng;
    const { data } = await getWeatherLatLng(
      $axios,
      cordinates.lat,
      cordinates.lng
    );
    weather.value = data;
  } catch (error: any) {
    errorMessage.value =
      error?.response?.data?.message || 'Something went wrong';
  } finally {
    isLoading.value = false;
  }
};

const location = ref('');
const isLoadingLocation = ref(false);
const getWeatherByLocation = async () => {
  if (!location.value) return;
  try {
    isLoadingLocation.value = true;
    const { data } = await getWeather($axios, location.value);
    weather.value = data;
    location.value = '';
  } catch (error: any) {
    errorMessage.value =
      error?.response?.data?.message || 'Something went wrong';
  } finally {
    isLoadingLocation.value = false;
  }
};

onMounted(() => {
  getRandomWeather();
});
</script>

<template>
  <header class="tw-mb-2">
    <form
      class="tw-mx-auto tw-flex tw-w-1/3 tw-items-center tw-justify-center"
      @submit.prevent
    >
      <SearchInput
        v-model:value="location"
        placeholder="Seach by city and country"
      />
      <button
        data-test="search-btn"
        :title="location ? 'Search' : 'Please enter a query'"
        @click="getWeatherByLocation"
      >
        <SpinnerMd v-if="isLoadingLocation" class="tw-h-8 tw-w-8" />
        <svg
          v-else
          class="tw-h-8 tw-w-8 tw-text-pri"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  </header>
  <main
    class="tw-flex tw-min-h-[90vh] tw-w-full tw-flex-col tw-justify-between tw-bg-white tw-p-8 tw-pt-0 sm:tw-flex-row"
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
        {{ isLoading ? 'Please wait...' : 'Random weather' }}
      </button>
      <ErrorDisplay v-if="errorMessage" :error-message="errorMessage" />
    </div>
    <div class="tw-w-[60%] tw-bg-gray1">
      <WeatherInfo :weather="weather" v-if="weather" />
      <div v-else class="tw-flex tw-h-full tw-items-center tw-justify-center">
        <SpinnerMd />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
