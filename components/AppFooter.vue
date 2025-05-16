<template>
  <div class="bg-slate-300 py-1"> <!-- Outer div for full-width background -->
    <footer class="container mx-auto text-center text-gray-500 text-sm">
      <p>&copy; {{ currentYear }} Duc CM. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
