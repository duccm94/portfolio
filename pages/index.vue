<template>
  <div>
    <h1>Duc CM</h1>

    <h2>My Timeline</h2>
    <CareerTimeline :timeline-events="timelineEvents" />

    <h2>Certifications</h2>
  </div>
</template>

<script setup lang="ts">
import { timelineEvents } from '~/data/timelineData';

// No additional script needed for this basic implementation
// The data is imported and passed directly to the component
</script>

<style scoped>
</style>
