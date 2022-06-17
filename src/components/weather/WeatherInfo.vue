<script setup lang="ts">
import type { Weather } from '@/types/interfact';
import { generateTime } from '@/utils/date.utils';
import { kelVinToCel } from '@/utils/temperature.utils';
import WeatherIcon from './WeatherIcon.vue';
import WeatherIconsData from '@/data/icons';
import { computed } from 'vue';

const props = defineProps<{
  weather: Weather | null;
}>();

const icon = computed(() => {
  return props.weather?.weather[0]?.icon ?? '01d';
});
</script>

<template>
  <div class="mxa tw-relative tw-z-10 tw-mx-auto tw-p-10">
    <section
      class="tw-mx-auto tw-mt-16 tw-flex tw-w-[37rem] tw-flex-col tw-items-center tw-rounded-[3rem] tw-bg-pri tw-py-16 tw-pb-20 tw-text-center tw-text-white"
    >
      <h1 class="tw-mb-2 tw-text-4xl tw-font-semibold">
        {{ weather?.name || 'Unknow location' }}
      </h1>
      <p
        class="tw-mb-6 tw-text-lg tw-font-medium tw-capitalize tw-text-gray-300"
      >
        {{ weather?.weather[0]?.description || 'Unknow weather' }}
      </p>

      <div class="tw-mb-14">
        <h1 class="temp tw-relative tw-text-[10rem] tw-font-bold">
          {{ kelVinToCel(weather?.main?.temp as number) || 0 }}c
        </h1>
        <WeatherIcon :icon="WeatherIconsData[icon]" />
      </div>

      <div class="tw-flex tw-items-center tw-justify-center">
        <div class="tw-mr-8">
          <img
            src="@/assets/img/sunrise-light.svg"
            alt="Sunrise"
            class="tw-w-20"
          />
          Sunrise
        </div>
        <div class="tw-mr-8">
          <img
            src="@/assets/img/humidity-light.svg"
            alt="Humidity"
            class="tw-w-20"
          />
          Humidity
        </div>
        <div class="tw-mr-8">
          <img src="@/assets/img/wind-light.svg" alt="Wind" class="tw-w-20" />
          Wind
        </div>

        <div>
          <img
            src="@/assets/img/mostly-cloudy-light.svg"
            alt="Pressure"
            class="tw-w-20"
          />
          Pressure
        </div>
      </div>
      <div>{{ generateTime() }}</div>
      {{ new Date().toLocaleDateString() }}
    </section>
    <div
      class="tw-absolute tw-top-[54px] tw-left-[148px] -tw-z-10 tw-h-[899px] tw-w-[37rem] tw-rotate-6 tw-rounded-[3rem] tw-bg-sec"
    ></div>
  </div>
</template>

<style scoped>
.temp,
.temp::after {
  background: -webkit-linear-gradient(-90deg, #eeeeee 20%, transparent 80%);
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent;
}
.temp::after {
  background: -webkit-linear-gradient(221deg, #eeeeee, transparent 60%);
  content: '\00b0';
  position: absolute;
  top: -6px;
  left: 188px;
  font-size: 6rem;
  /* tw-absolute -tw-top-3 tw-left-[178px] tw-text-[6rem] */
}
</style>
