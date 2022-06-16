<script setup lang="ts">
// import { generateTime } from "@/utils/date.utils";
</script>
<template>
  <section class="tw-bg-pri">
    <h1 class="tw-text-4xl tw-font-semibold">Nigeira</h1>
    <p class="tw-text-xl tw-font-medium">Chances of Rain: 5%</p>

    <div class="tw-mb-28">
      <h class="tw-text-9xl tw-font-bold tw-relative temp">
        28<span class="tw-absolute tw-top-0 tw-left-[138px] tw-text-8xl deg"
          >&deg;</span
        ></h
      >
      <img src="@/assets/img/rainyday-light.svg" alt="thunder" />
    </div>
    <div>
      <img src="" alt="" />
    </div>
    <div>
      <div>
        <img src="@/assets/img/sunrise-light.svg" alt="Sunrise" />
        Sunrise
      </div>
      <div>
        <img src="@/assets/img/humidity-light.svg" alt="Humidity" />
        Humidity
      </div>
      <div>
        <img src="@/assets/img/wind-light.svg" alt="Wind" />
        Wind
      </div>

      <div>
        <img src="@/assets/img/mostly-cloudy-light.svg" alt="Pressure" />
        Pressure
      </div>
    </div>
    <!-- <div>{{ generateTime() }}</div> -->
    <!-- {{ new Date().toLocaleDateString() }} -->
  </section>
</template>

<style scoped>
.temp {
  background: -webkit-linear-gradient(-90deg, #eeeeee 40%, transparent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.temp .deg {
  background: -webkit-linear-gradient(221deg, #eeeeee, transparent 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
