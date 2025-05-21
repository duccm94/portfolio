<template>
  <div v-if="event" class="sticky top-4 max-h-[calc(100vh-3rem)] overflow-auto p-5 bg-white rounded-lg shadow-lg">
    <p class="text-sm text-gray-500 mb-1">
      {{ event.startDate }} - {{ event.endDate }}
    </p>
    <h3 class="text-xl font-semibold mb-1">{{ event.title }}</h3>
    <p class="text-lg font-medium mb-1">{{ event.organization }}</p>
    <p v-if="event.location" class="mb-1">{{ event.location }}</p>
    <div v-if="event.skills && event.skills.length > 0" class="mb-1">
      <span>Skills:</span> {{ event.skills.join(', ') }}
    </div>
    <div>
      <template v-if="Array.isArray(event.detailedDescription)">
        <MDC v-for="(paragraph, index) in event.detailedDescription" :key="index" :value="paragraph" class="mb-1" />
      </template>
      <template v-else>
        <MDC :value="event.detailedDescription" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimelineEvent } from '@/types/TimelineEvent';

interface Props {
  event: TimelineEvent | null;
}

defineProps<Props>();
</script>
