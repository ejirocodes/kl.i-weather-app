<script setup lang="ts">
// import { generateTime } from "@/utils/date.utils";
</script>
<template>
  <section
    class="tw-flex tw-w-[40rem] tw-flex-col tw-items-center tw-rounded-[2.4rem] tw-bg-pri tw-py-16 tw-text-center tw-text-white"
  >
    <h1 class="tw-mb-2 tw-text-4xl tw-font-semibold">Nigeira</h1>
    <p class="tw-mb-14 tw-text-xl tw-font-medium tw-text-slate-300">
      Chances of Rain: 5%
    </p>

    <div class="tw-mb-14">
      <h class="temp tw-relative tw-text-[10rem] tw-font-bold">
        28<span class="deg tw-absolute -tw-top-3 tw-left-[178px] tw-text-[6rem]"
          >&deg;</span
        ></h
      >
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
    <!-- <div>{{ generateTime() }}</div> -->
    <!-- {{ new Date().toLocaleDateString() }} -->
  </section>
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
