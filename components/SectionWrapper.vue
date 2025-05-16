<template>
  <section :id="id" :class="['py-6 md:py-10', backgroundClass]">
    <div class="container mx-auto">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * A reusable wrapper component to create full-width sections
 * with centered content using Tailwind CSS.
 */
defineProps({
  /**
   * Tailwind CSS classes for the background of the section.
   * Example: 'bg-white'
   */
  backgroundClass: {
    type: String,
    required: false,
    default: null,
  },
  /**
   * Optional ID for the section, useful for anchor links or specific styling.
   */
  id: {
    type: String,
    required: false,
    default: null,
  }
});
</script>
