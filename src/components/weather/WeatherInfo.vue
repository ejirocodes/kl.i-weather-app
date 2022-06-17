<script setup lang="ts">
import type { Weather } from '@/types/interfact';
import { generateTime } from '@/utils/date.utils';
import { kelVinToCel } from '@/utils/temperature.utils';
import WeatherIcon from './WeatherIcon.vue';
import WeatherIconsData from '@/data/icons';
import { computed } from 'vue';
import WeatherStats from './WeatherStats.vue';
// import SunLight from '@/assets/img/sun-light.svg';
const SunriseLight = new URL(
  '../../assets/img/sunrise-light.svg',
  import.meta.url
).href;
const Humidity = new URL('../../assets/img/humidity-light.svg', import.meta.url)
  .href;
const Wind = new URL('../../assets/img/wind-light.svg', import.meta.url).href;
const Pressure = new URL(
  '../../assets/img/mostly-cloudy-light.svg',
  import.meta.url
).href;

const props = defineProps<{
  weather: Weather | null;
}>();

const icon = computed(() => {
  return props.weather?.weather[0]?.icon ?? '01d';
});

const isDay = computed(() => props.weather?.weather[0].icon?.includes('d'));
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
        <WeatherStats
          :name="isDay ? 'Sunset' : 'Sunrise'"
          :icon="SunriseLight"
          :stat="generateTime(weather?.sys[isDay ? 'sunrise' : 'sunset'] as number)"
        />
        <WeatherStats
          :name="'Humidity'"
          :icon="Humidity"
          :stat="(weather?.main?.humidity as number)"
        />
        <WeatherStats
          :name="'Wind'"
          :icon="Wind"
          :stat="(weather?.wind.speed as number)"
        />
        <WeatherStats
          class="tw-mr-0"
          :name="'Pressure'"
          :icon="Pressure"
          :stat="(weather?.main.pressure as number)"
        />
      </div>
      <time class="tw-pt-6">
        {{
          new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
        }}
      </time>
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
}
</style>
