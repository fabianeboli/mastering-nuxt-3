<script setup lang='ts'>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:defineEmits']);
</script>

<template>
  <label class="relative top-3 py-2 px-5 text-white font-semibold rounded-sm hover:cursor-pointer"
  :class="{'bg-gray-700': !modelValue, 'bg-emerald-600': modelValue}">
    <input 
    type="checkbox" 
    :value="modelValue" 
    @input="() => $emit('update:modelValue', !modelValue)" class="hidden" />
    {{ modelValue ? 'Completed!' : 'Mark as Complete' }}
  </label>
</template>

<style scoped>
::selection {
  display: none;
}

</style>