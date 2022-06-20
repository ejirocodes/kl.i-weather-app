<script setup lang="ts">
const emit = defineEmits(['update:value']);

withDefaults(
  defineProps<{
    placeholder: string;
    value: string;
  }>(),
  {
    placeholder: 'Search',
    value: '',
  }
);

const updateSearch = (event: Event) => {
  emit('update:value', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="tw-relative tw-mr-[8px] tw-w-full tw-rounded-md tw-shadow-sm">
    <input
      data-test="input"
      autofocus
      id="search"
      type="search"
      name="search"
      :value="value"
      class="tw-placeholder-gray-400tw- focus:outline-none tw-focus:ring-0 tw-sm:text-sm tw-hover:shadow-md tw-block tw-h-[42px] tw-w-full tw-appearance-none tw-rounded-md tw-px-3 tw-py-2 tw-pl-6 tw-shadow-sm"
      :placeholder="placeholder"
      @input="updateSearch"
    />
  </div>
</template>
