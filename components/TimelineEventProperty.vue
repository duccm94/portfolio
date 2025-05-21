<template>
  <div v-if="$slots.default" :class="['flex items-start gap-2 mb-1', textSizeClass]">
    <span>
      <Icon :name="iconName" class="text-base align-middle" />
    </span>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  /**
   * Tailwind CSS classes for the text size of the property.
   * Example: 'text-lg'
   */
  textSizeClass: {
    type: String,
    required: false,
    default: null,
  },
  /**
   * Icon name to be displayed next to the property.
   * Example: 'mdi:briefcase-outline'
   */
  iconName: {
    type: String,
    required: true
  }
});
</script>
