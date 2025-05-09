---
applyTo: "**/*.vue, **/*.ts, **/*.js, **/*.css"
---
# Project coding standards for TypeScript, Nuxt and TailwindCSS

Apply the [general coding guidelines](./general-coding.instructions.md) to all code.

## TypeScript Guidelines
- Use TypeScript rather than Javascript for all new code
- Follow functional programming principles where possible
- Always provide explicit types, avoid `any` type

## Nuxt Guidelines
- Follow Nuxt Directory Structure
- Keep components small, focused, and reusable, adhering to the single responsibility principle
- Use `<script setup>` with Vue 3 Composition API for components
- Implement Pinia store and state management
- Leverage auto-imports
- Optimize performance by using lazy loading, caching strategies
- Optimize images using `<NuxtImage>` and `<NuxtPicture>`

## Styling Guidelines
- Use TailwindCSS with CSS modules for component styling
