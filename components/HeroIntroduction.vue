<template>
  <div v-if="data" :class="$style.heroIntroduction">
    <div :class="$style.heroContent">
      <div :class="$style.textInfo">
        <h1 :class="$style.name">{{ data.name }}</h1>
        <p :class="$style.title">{{ data.title }}</p>
        <p :class="$style.bio">
          {{ data.bio }}
        </p>
        <div v-if="data.socialLinks && data.socialLinks.length > 0" :class="$style.socialLinks">
          <a
            v-for="link in data.socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            :class="$style.socialLink"
          >
            <Icon :name="link.icon" :class="$style.socialIcon" /> {{ link.name }}
          </a>
        </div>
        <p v-if="data.location" :class="$style.location">
          <Icon name="mdi:map-marker" :class="$style.locationIcon" /> {{ data.location }}
        </p>
      </div>
      <div :class="$style.avatarContainer">
        <NuxtImg
          :src="data.avatarUrl"
          :alt="data.avatarAlt"
          :class="$style.avatar"
          width="200"
          height="200"
          format="webp"
          placeholder
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { heroData as data } from '@/data/heroData'; // Import the data
</script>

<style module>
.heroIntroduction {
  background-color: var(--color-background-elevated, #f8f9fa); /* A slightly different background */
  padding: 60px 20px;
  text-align: center;
  font-family: var(--font-sans);
  border-bottom: 1px solid var(--color-border-subtle, #e0e0e0);
}

.heroContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .heroContent {
    flex-direction: row;
    text-align: left;
    gap: 50px;
  }
  .textInfo {
    flex: 2; /* Takes more space */
  }
  .avatarContainer {
    flex: 1; /* Takes less space */
    order: 1; /* Profile picture on the right for wider screens */
  }
}

.textInfo {
  order: 2; /* Text below image on mobile */
}

.name {
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 10px;
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-primary-500);
  margin-bottom: 20px;
}

.bio {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 25px;
  max-width: 600px; /* Limit bio width for readability */
  margin-left: auto; /* Center if text-align is center */
  margin-right: auto; /* Center if text-align is center */
}

@media (min-width: 768px) {
  .bio {
    margin-left: 0; /* Align left on wider screens */
    margin-right: 0;
  }
}

.socialLinks {
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

@media (min-width: 768px) {
  .socialLinks {
    justify-content: flex-start;
  }
}

.socialLink {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 6px;
  background-color: var(--color-background-muted);
  transition: background-color 0.2s, color 0.2s;
}

.socialLink:hover {
  background-color: var(--color-primary-100);
  color: var(--color-primary-600);
}

.socialIcon {
  font-size: 1.4rem;
}

.location {
  font-size: 1rem;
  color: var(--color-text-tertiary);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.locationIcon {
  font-size: 1.2rem;
}

.avatarContainer {
  order: 1; /* Image above text on mobile */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  object-fit: cover;
  border: 5px solid var(--color-background-body, #fff);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.photoCaption {
  font-size: 0.8rem;
  color: var(--color-text-tertiary);
  margin-top: 10px;
}

</style>
