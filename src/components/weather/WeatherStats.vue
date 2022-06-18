<script setup lang="ts">
defineProps<{
  name: string;
  icon: string;
  stat: number | string;
}>();
</script>

<template>
  <div class="tw-mr-8 tw-capitalize">
    <img :src="icon" :alt="name" class="tw-w-20" />
    <p data-test="name">{{ name }}</p>
    <p data-test="stat">{{ stat }}</p>
  </div>
</template>
