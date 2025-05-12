<template>
  <footer :class="$style.footer">
    <p>&copy; {{ currentYear }} Duc Chu. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style module>
.footer {
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa; /* A light background color */
  color: #6c757d; /* A muted text color */
  border-top: 1px solid #e0e0e0; /* A subtle top border */
  font-size: 0.9rem;
  margin-top: 40px; /* Add some space above the footer */
}
</style>
