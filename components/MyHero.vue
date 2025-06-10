<template>
  <SectionWrapper
    id="hero"
  >
    <div class="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:justify-center mx-auto">
      <div class="order-1 shrink-0">
        <NuxtImg
          :src="data.avatarUrl"
          :alt="data.avatarAlt"
          class="rounded-full w-44 h-44 object-cover shadow-lg text-center leading-[11rem]"
          placeholder
        />
      </div>
      <div class="order-2 text-center md:text-left">
        <h1 class="text-4xl font-bold mb-2.5">{{ data.name }}</h1>
        <p class="text-2xl mb-5">{{ data.title }}</p>
        <p class="text-xl mb-5">
          <span id="typing-el" />
        </p>
        <p class="text-lg mb-5 max-w-xl">{{ data.bio }}</p>
        <div
          v-if="data.socialLinks && data.socialLinks.length > 0"
          class="mb-5 flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <a
            v-for="link in data.socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 p-2 rounded-md bg-gray-200 hover:bg-indigo-200 hover:text-indigo-700"
          >
            <Icon :name="link.icon" class="text-xl" /> {{ link.name }}
          </a>
        </div>
        <p v-if="data.location" class="inline-flex items-center gap-2">
          <Icon name="mdi:home-heart" class="text-2xl" /> {{ data.location }}
        </p>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { heroData as data } from '@/data/heroData';
import Typed from 'typed.js';

onMounted(() => {
  new Typed('#typing-el', {
    strings: data.typing,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true,
  })

});
</script>
