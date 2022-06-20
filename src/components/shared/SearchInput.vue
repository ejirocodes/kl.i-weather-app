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
    <!-- <div
      class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-z-10 tw-flex tw-items-center tw-pl-3"
    >
      
    </div> -->
    <input
      id="search"
      type="search"
      name="search"
      :value="value"
      class="tw-placeholder-gray-400tw- focus:outline-none tw-focus:ring-0 tw-sm:text-sm tw-hover:shadow-md pl-10 tw-block tw-h-[42px] tw-w-full tw-appearance-none tw-rounded-md tw-px-3 tw-py-2 tw-shadow-sm"
      :placeholder="placeholder"
      @input="updateSearch"
    />
  </div>
</template>
