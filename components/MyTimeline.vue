<template>
  <SectionWrapper
    id="timeline"
    background-class="bg-slate-50"
  >
    <h2 class="text-3xl font-semibold mb-5">Career Journey</h2>
    <div class="flex flex-col md:flex-row md:items-start gap-5">
      <ul class="border-l-8 md:flex-1 md:max-w-[500px]">
        <li
          v-for="event in timelineEvents"
          :key="event.id"
          :class="[
            'p-3 md:p-5 my-4 ml-10 rounded-lg bg-white cursor-pointer relative hover:bg-gray-100',
            { '!bg-indigo-100 shadow-lg': selectedEvent?.id === event.id }
          ]"
          @click="selectEvent(event)"
        >
          <!-- Timeline marker -->
          <div
            :class="[
              'absolute -left-12 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full',
              selectedEvent?.id === event.id ? 'bg-indigo-600' : 'bg-gray-400'
            ]"
          >
            <!-- Branch line from marker to event box -->
            <div
              :class="[
                'absolute left-2 w-10 h-px top-1/2 -translate-y-1/2',
                selectedEvent?.id === event.id ? 'bg-indigo-600' : 'bg-gray-400'
              ]"
            />
          </div>
          <!-- Event details -->
          <div class="block">
            <TimelineEventProperty
              icon-name="mdi:calendar-month-outline"
              text-size-class="text-xs"
            >
              <span class="text-xs text-gray-500">{{ event.startDate }} - {{ event.endDate }}</span>
            </TimelineEventProperty>
            <TimelineEventProperty
              icon-name="mdi:briefcase-outline"
              text-size-class="text-lg"
            >
              <span class="text-lg font-semibold">{{ event.title }}</span>
            </TimelineEventProperty>
            <TimelineEventProperty
              icon-name="mdi:domain"
            >
              <span class="font-medium">{{ event.organization }}</span>
            </TimelineEventProperty>

            <!-- Expanded details for mobile, hidden on md and up -->
            <div v-if="selectedEvent?.id === event.id" class="md:hidden">
              <TimelineEventProperty
                v-if="event.location"
                icon-name="mdi:office-building-marker-outline"
                text-size-class="text-sm"
              >
                <span class="text-sm">{{ event.location }}</span>
              </TimelineEventProperty>
              <TimelineEventProperty
                v-if="event.skills && event.skills.length > 0"
                icon-name="mdi:laptop"
                text-size-class="text-sm"
              >
                <span class="text-sm">{{ event.skills.join(', ') }}</span>
              </TimelineEventProperty>
            </div>

            <TimelineEventProperty
              icon-name="mdi:text-short"
              text-size-class="text-sm"
            >
              <span class="text-sm">{{ event.shortDescription }}</span>
            </TimelineEventProperty>

            <!-- Expanded details for mobile, hidden on md and up -->
            <div v-if="selectedEvent?.id === event.id" class="flex items-start gap-2 md:hidden">
              <TimelineEventProperty
                icon-name="mdi:text-long"
                text-size-class="text-sm"
              >
                <div class="text-sm">
                  <template v-if="Array.isArray(event.detailedDescription)">
                    <MDC v-for="(paragraph, index) in event.detailedDescription" :key="index" :value="paragraph" class="mb-1" />
                  </template>
                  <template v-else>
                    <MDC :value="event.detailedDescription" />
                  </template>
                </div>
              </TimelineEventProperty>
            </div>
          </div>
        </li>
      </ul>
      <!-- Detail view for md, hidden on smaller screens -->
      <TimelineEventDetail
        v-if="selectedEvent"
        :key="selectedEvent.id"
        :event="selectedEvent"
        class="hidden md:block md:flex-[1.5]"
      />
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { TimelineEvent as TimelineEventType } from '@/types/TimelineEvent';
import { timelineEvents } from '@/data/timelineData';

const selectedEvent = ref<TimelineEventType | null>(null);

function selectEvent(event: TimelineEventType) {
  selectedEvent.value = event;
}

// Select the most recent event by default
onMounted(() => {
  if (timelineEvents.length > 0) {
    selectEvent(timelineEvents[0] as TimelineEventType);
  }
});
</script>
