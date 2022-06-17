<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>

<template>
  <img :src="icon" alt="thunder" class="tw-mx-auto -tw-mt-16" />
</template>
