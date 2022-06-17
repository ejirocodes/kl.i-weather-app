<script setup lang="ts">
import { generateTime } from '@/utils/date.utils';
</script>

<template>
  <div class="mxa tw-relative tw-z-10 tw-mx-auto tw-p-10">
    <section
      class="tw-mx-auto tw-mt-16 tw-flex tw-w-[37rem] tw-flex-col tw-items-center tw-rounded-[3rem] tw-bg-pri tw-py-16 tw-pb-20 tw-text-center tw-text-white"
    >
      <h1 class="tw-mb-2 tw-text-4xl tw-font-semibold">Nigeira</h1>
      <p class="tw-mb-6 tw-text-lg tw-font-medium tw-text-gray-300">
        Chances of Rain: 5%
      </p>

      <div class="tw-mb-14">
        <h1 class="temp tw-relative tw-text-[10rem] tw-font-bold">
          28<span
            class="deg tw-absolute -tw-top-3 tw-left-[178px] tw-text-[6rem]"
            >&deg;</span
          >
        </h1>
        <img
          src="@/assets/img/rainyday-light.svg"
          alt="thunder"
          class="-tw-mt-16"
        />
      </div>
      <div>
        <img src="" alt="" />
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
.temp .deg {
  background: -webkit-linear-gradient(-90deg, #eeeeee 20%, transparent 80%);
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent;
}
.temp .deg {
  background: -webkit-linear-gradient(221deg, #eeeeee, transparent 60%);
}
</style>
