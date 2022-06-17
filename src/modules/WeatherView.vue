<script setup lang="ts">
import WeatherInfo from '../components/WeatherInfo.vue';
import { ref, inject, onMounted, reactive } from 'vue';
import type { AxiosStatic } from 'axios';
import { getWeather } from '@/services/weather.searvice';

const $axios = inject('$axios') as AxiosStatic;
const cordinates = reactive({
  lat: 0,
  lng: 0,
});

function generateRandomLatLng() {
  const lat = (Math.random() * (90 - -90) + -90).toFixed(2);
  const lng = (Math.random() * (180 - -180) + -180).toFixed(2);
  cordinates.lat = Number(lat);
  cordinates.lng = Number(lng);
  return { lat, lng };
}
const getRandomWeather = async () => {
  try {
    const { data } = await getWeather($axios, cordinates.lat, cordinates.lng);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  generateRandomLatLng();
  getRandomWeather();
});
</script>

<template>
  <WeatherInfo />
</template>

<style scoped></style>
