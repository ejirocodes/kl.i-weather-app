<script setup lang="ts">
defineProps<{
  name: string;
  icon: string;
  stat: number | string;
}>();
</script>

<template>
  <div class="tw-mr-4 tw-text-center tw-capitalize md:tw-mr-8">
    <img :src="icon" :alt="name" class="tw-mx-auto tw-w-10 md:tw-w-16" />
    <p data-test="name" class="tw-text-xs">{{ name }}</p>
    <p data-test="stat" class="tw-text-sm">{{ stat }}</p>
  </div>
</template>
