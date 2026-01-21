<template>
  <MainLayout>
    <HeroSection />
    <TechStack />
    <ExperienceTimeline />  
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import HeroSection from '@/sections/HeroSection.vue'
import TechStack from '@/sections/TechStack.vue'
import ExperienceTimeline from '@/sections/ExperienceTimeline.vue'
</script>

<style>
/* Imports de estilos globales */
@import './styles/variables.css';
@import './styles/global.css';
</style>