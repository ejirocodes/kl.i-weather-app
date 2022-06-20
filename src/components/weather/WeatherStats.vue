<script setup lang="ts">
defineProps<{
  name: string;
  icon: string;
  stat: number | string;
}>();
</script>

<template>
  <div class="tw-mr-8 tw-capitalize">
    <img :src="icon" :alt="name" class="tw-w-16" />
    <p data-test="name" class="tw-text-xs">{{ name }}</p>
    <p data-test="stat" class="tw-text-sm">{{ stat }}</p>
  </div>
</template>
