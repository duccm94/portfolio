<template>
  <div v-if="event" class="p-5 bg-white rounded-lg shadow-lg md:mt-0">
    <h2 class="text-2xl font-bold text-gray-800 mt-0 mb-2">{{ event.title }}</h2>
    <p class="text-lg text-gray-600 mb-1">{{ event.organization }}</p>
    <p v-if="event.location" class="text-base text-gray-500 mb-3">{{ event.location }}</p>
    <p class="text-sm text-indigo-600 font-semibold mb-4">
      {{ event.startDate }} - {{ event.endDate }}
    </p>
    <div class="text-base text-gray-700 leading-relaxed mb-4">
      <template v-if="Array.isArray(event.detailedDescription)">
        <p v-for="(paragraph, index) in event.detailedDescription" :key="index" class="mb-2.5">{{ paragraph }}</p>
      </template>
      <template v-else>
        <p>{{ event.detailedDescription }}</p>
      </template>
    </div>
    <div v-if="event.skills && event.skills.length > 0" class="text-sm text-gray-600">
      <strong class="text-gray-800">Skills:</strong> {{ event.skills.join(', ') }}
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
