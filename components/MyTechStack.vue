<template>
  <SectionWrapper
    id="tech-stack"
    background-class="bg-slate-200"
  >
    <h2 class="text-3xl font-semibold mb-5">Tech Stack</h2>
    <div v-for="(group, category) in groupedStack" :key="category" class="mb-8">
      <h3 class="text-xl font-medium mb-4 pl-2 border-l-4 border-indigo-500">{{ category }}</h3>
      <ul class="flex flex-wrap gap-4">
        <li
          v-for="item in group" :key="item.name"
          class="inline-flex items-center bg-white rounded-lg gap-2 p-2 shadow hover:-translate-y-0.5 hover:shadow-md"
        >
          <Icon v-if="item.icon" :class="['text-xl']" :name="item.icon" /> {{ item.name }}
        </li>
      </ul>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { techStack as data } from '@/data/techStackData';
import type { TechStackItem } from '@/types/TechStack';

const groupedStack = computed(() => {
  return data.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<TechStackItem['category'], TechStackItem[]>);
});
</script>
