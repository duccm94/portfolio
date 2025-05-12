<template>
  <div :class="$style.timelineContainer">
    <ul :class="$style.timeline">
      <li
        v-for="event in timelineEvents"
        :key="event.id"
        :class="[
          $style.timelineEvent,
          { [$style.selected]: selectedEvent?.id === event.id }
        ]"
        @click="selectEvent(event)"
      >
        <div :class="$style.eventMarker" />
        <div :class="$style.eventContent">
            <p :class="$style.eventDate">
              {{ event.startDate }} - {{ event.endDate }}
            </p>
          <h3 :class="$style.eventTitle">{{ event.title }}</h3>
          <p :class="$style.eventOrganization">{{ event.organization }}</p>
          <p :class="$style.eventShortDescription">{{ event.shortDescription }}</p>
        </div>
      </li>
    </ul>
    <TimelineEvent
      v-if="selectedEvent"
      :event="selectedEvent"
      :class="$style.detailsPanel"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { TimelineEvent } from '@/types/TimelineEvent';
import { timelineEvents } from '@/data/timelineData';

const selectedEvent = ref<TimelineEvent | null>(null);

function selectEvent(event: TimelineEvent) {
  selectedEvent.value = event;
}

// Select the most recent event by default
onMounted(() => {
  if (timelineEvents.length > 0) {
    selectEvent(timelineEvents[0]);
  }
});
</script>

<style module>
.timelineContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative; /* Add this to ensure the timeline has a positioning context */
}

.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative; /* Needed for absolute positioning of ::before */
  border-left: 4px solid #ddd; /* Thicker timeline line - shaft of the arrow */
  margin-left: 20px; /* Adjusted: Add margin to position the timeline consistently */
}

/* Arrowhead for the main timeline */
.timeline::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -12px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid #ddd;
}

.timelineEvent {
  padding: 15px 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;
  padding-left: 30px; /* Standard padding for content */
  margin-left: 40px; /* Creates space between timeline and event boxes */
}

.timelineEvent:hover {
  background-color: #f0f0f0;
}

.timelineEvent.selected {
  background-color: #e0eafc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Added property to satisfy linter */
}

/* Event marker with branch line to content */
.eventMarker {
  position: absolute;
  left: -50px; /* Position dot on the timeline */
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #6c63ff; /* Default marker color */
  border: 2px solid white; /* White border for clean look */
  z-index: 2; /* Ensures marker is above timeline and branch line */
}

/* Horizontal branch line from timeline to content */
.eventMarker::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 16px; /* Starts from the right edge of the marker (12px content + 2px border × 2) */
  width: 30px; /* Length of branch line - spans the gap between timeline and event box */
  height: 2px; /* Thickness of branch line */
  background-color: #ddd; /* Same color as main timeline */
  transform: translateY(-50%); /* Center vertically */
  z-index: 1; /* Above timeline but below marker */
}

.timelineEvent.selected .eventMarker {
  background-color: #4a42cc; /* Change dot color for selected */
}

.timelineEvent.selected .eventMarker::after {
  background-color: #4a42cc; /* Match branch line to selected color */
}

.eventContent {
  display: block; /* Added property to satisfy linter */
}

.eventDate {
  font-size: 0.85em;
  color: #666;
  margin-bottom: 5px;
}

.eventTitle {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0 0 5px 0;
  color: #333;
}

.eventOrganization {
  font-size: 1em;
  color: #555;
  margin-bottom: 8px;
}

.eventShortDescription {
  font-size: 0.9em;
  color: #777;
  line-height: 1.4;
}

.detailsPanel {
  max-width: 100%; /* Added property to satisfy linter */
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .timelineContainer {
    flex-direction: row;
    align-items: flex-start;
  }
  .timeline {
    flex: 1; /* Timeline takes up available space */
    max-width: 500px; /* Or a fixed width */
    margin-right: 20px; /* Space between timeline and details panel */
    margin-left: 20px; /* Consistent margin in desktop view too */
  }
  .detailsPanel {
    flex: 1.5; /* Details panel takes more space */
    position: sticky;
    top: 20px; /* Adjust as needed for header/navbar */
    max-height: calc(100vh - 40px); /* Example max height */
    overflow-y: auto;
  }
}
</style>
