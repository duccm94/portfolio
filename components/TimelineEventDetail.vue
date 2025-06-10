<template>
  <div v-if="event" class="sticky top-4 max-h-[calc(100vh-3rem)] overflow-auto p-5 bg-white rounded-lg shadow-lg">
    <TimelineEventProperty
      icon-name="mdi:calendar-month-outline"
      text-size-class="text-sm"
    >
      <span class="text-sm text-gray-500">{{ event.startDate }} - {{ event.endDate }}</span>
    </TimelineEventProperty>
    <TimelineEventProperty
      :icon-name="event.type === 'work' ? 'mdi:briefcase-outline' : 'mdi:school-outline'"
      text-size-class="text-xl"
    >
      <span class="text-xl font-semibold">{{ event.title }}</span>
    </TimelineEventProperty>
    <TimelineEventProperty
      icon-name="mdi:domain"
      text-size-class="text-lg"
    >
      <MDC :value="event.organization" class="markdown text-lg font-medium" />
    </TimelineEventProperty>
    <TimelineEventProperty
      v-if="event.location"
      icon-name="mdi:office-building-marker-outline"
    >
      <span>{{ event.location }}</span>
    </TimelineEventProperty>
    <TimelineEventProperty
      v-if="event.skills && event.skills.length > 0"
      icon-name="mdi:laptop"
    >
      <span>{{ event.skills.join(', ') }}</span>
    </TimelineEventProperty>
    <TimelineEventProperty
      icon-name="mdi:text-long"
    >
      <div class="markdown">
        <template v-if="Array.isArray(event.detailedDescription)">
          <MDC v-for="(paragraph, index) in event.detailedDescription" :key="index" :value="paragraph" class="mb-1" />
        </template>
        <template v-else>
          <MDC :value="event.detailedDescription" />
        </template>
      </div>
    </TimelineEventProperty>
  </div>
</template>

<script setup lang="ts">
import type { TimelineEvent } from '@/types/TimelineEvent';

interface Props {
  event: TimelineEvent | null;
}

defineProps<Props>();
</script>
