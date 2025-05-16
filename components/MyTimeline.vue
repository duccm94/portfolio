<template>
  <SectionWrapper
    id="timeline"
    background-class="bg-slate-50"
  >
    <h2 class="text-3xl font-semibold mb-5">Career Journey</h2>
    <div class="flex flex-col gap-5 relative md:flex-row md:items-start">
      <ul class="list-none p-0 m-0 relative border-l-4 border-gray-300 ml-5 md:flex-1 md:max-w-[500px] md:mr-5">
        <!-- Arrow tip for the timeline -->
        <div class="absolute -top-0.5 -left-3 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-gray-300" />
        <li
          v-for="event in timelineEvents"
          :key="event.id"
          :class="[
            'py-[15px] px-5 my-[15px] rounded-lg bg-gray-50 cursor-pointer transition-colors duration-300 ease-in-out relative pl-[30px] ml-10 hover:bg-gray-100',
            { 'bg-indigo-100 shadow-sm': selectedEvent?.id === event.id }
          ]"
          @click="selectEvent(event)"
        >
          <div :class="[
            'absolute -left-[50px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white z-20',
            selectedEvent?.id === event.id ? 'bg-indigo-700' : 'bg-indigo-500'
          ]">
            <!-- Branch line from marker to event box -->
            <div :class="[
              'absolute top-1/2 left-4 w-[30px] h-0.5 -translate-y-1/2 z-10',
              selectedEvent?.id === event.id ? 'bg-indigo-700' : 'bg-gray-300'
            ]" />
          </div>
          <div class="block">
              <p class="text-xs text-gray-500 mb-1">
                {{ event.startDate }} - {{ event.endDate }}
              </p>
            <h3 class="text-lg font-bold mb-1 text-gray-800">{{ event.title }}</h3>
            <p class="text-base text-gray-600 mb-2">{{ event.organization }}</p>
            <p class="text-sm text-gray-500 leading-snug">{{ event.shortDescription }}</p>
          </div>
        </li>
      </ul>
      <TimelineEvent
        v-if="selectedEvent"
        :event="selectedEvent"
        class="max-w-full md:flex-[1.5] md:sticky md:top-5 md:max-h-[calc(100vh-40px)] md:overflow-y-auto"
      />
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { TimelineEvent as TimelineEventType } from '@/types/TimelineEvent'; // Renamed to avoid conflict
import { timelineEvents } from '@/data/timelineData';

const selectedEvent = ref<TimelineEventType | null>(null);

function selectEvent(event: TimelineEventType) {
  selectedEvent.value = event;
}

// Select the most recent event by default
onMounted(() => {
  if (timelineEvents.length > 0) {
    // Ensure timelineEvents is correctly typed if it's imported directly
    selectEvent(timelineEvents[0] as TimelineEventType);
  }
});
</script>
