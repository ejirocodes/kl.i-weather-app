<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>

<template>
  <img
    :src="icon"
    alt="thunder"
    class="icon tw-mx-auto -tw-mt-16 tw-w-[150px]"
    width="150"
    height="150"
  />
</template>
