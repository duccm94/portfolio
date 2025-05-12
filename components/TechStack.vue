<template>
  <div :class="$style.techStackSection">
    <h2 :class="$style.sectionTitle">Tech Stack</h2>
    <div v-for="(group, category) in groupedStack" :key="category" :class="$style.categoryGroup">
      <h3 :class="$style.categoryTitle">{{ category }}</h3>
      <ul :class="$style.techList">
        <li v-for="item in group" :key="item.name" :class="$style.techItem">
          <Icon v-if="item.icon" :class="[$style.techIcon]" :name="item.icon" />
          <span v-else :class="$style.techNameOnly">{{ item.name }}</span>
          <span v-if="item.icon" :class="$style.techName">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { techStack } from '@/data/techStackData';
import type { TechStackItem } from '@/types/TechStack';

const groupedStack = computed(() => {
  return techStack.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<TechStackItem['category'], TechStackItem[]>);
});
</script>

<style module>
.techStackSection {
  margin-top: 40px;
  font-family: var(--font-sans);
}

.sectionTitle {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--color-text-primary);
  border-bottom: 2px solid var(--color-primary-500);
  padding-bottom: 10px;
}

.categoryGroup {
  margin-bottom: 30px;
}

.categoryTitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-text-emphasis);
  margin-bottom: 15px;
  padding-left: 10px;
  border-left: 3px solid var(--color-accent-500); /* Using accent color for category titles */
}

.techList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.techItem {
  display: flex;
  flex-direction: column; /* Stack icon and name vertically */
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-secondary);
  border-radius: 8px;
  padding: 15px;
  min-width: 100px; /* Minimum width for each item */
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.techItem:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.techIcon {
  font-size: 2.5rem; /* Adjust icon size as needed */
  color: var(--color-primary-500); /* Or use specific colors per icon if desired */
  margin-bottom: 8px; /* Space between icon and name */
}

.techName {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.techNameOnly {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  /* Styles for when there is no icon, ensuring it looks good */
  padding: 10px; /* Add some padding if it's just text */
}

/* Example: Add this to your global CSS or a style block in app.vue if you haven't already for Devicon */
/* @import url('https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'); */

</style>
