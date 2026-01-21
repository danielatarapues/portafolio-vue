<template>
  <section class="tech-stack" id="tecnologías">
    <div class="container">
      <div class="tech-stack-header">
        <h2 class="section-title">Tecnologías y Herramientas</h2>
        <div class="header-line"></div>
      </div>
    </div>

    <div class="carousel-outer">
      <div class="fade-edge left"></div>
      <div class="fade-edge right"></div>

      <div
        class="carousel-track"
        ref="carouselTrack"
        @mouseenter="pauseCarousel"
        @mouseleave="resumeCarousel"
      >
        <div
          v-for="(tech, index) in [...technologies, ...technologies]"
          :key="`${tech.name}-${index}`"
          class="tech-card"
        >
          <span class="tech-category">{{ tech.category }}</span>

          <div class="tech-icon">
            <ReactIcon v-if="tech.icon === 'custom-react'" />

            <i v-else :class="[tech.icon, 'gradient-icon-text']"></i>
          </div>

          <div class="tech-content">
            <h3 class="tech-name">{{ tech.name }}</h3>
            <p class="tech-description">{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { TECHNOLOGIES_LIST } from '@/constants/technologies'
  import ReactIcon from '@/components/ui/icons/ReactIcon.vue'

  const technologies = TECHNOLOGIES_LIST
  // eslint-disable-next-line no-undef
  const carouselTrack = ref<HTMLDivElement | null>(null)

  const pauseCarousel = () => {
    if (carouselTrack.value)
      carouselTrack.value.style.animationPlayState = 'paused'
  }

  const resumeCarousel = () => {
    if (carouselTrack.value)
      carouselTrack.value.style.animationPlayState = 'running'
  }
</script>

<style scoped>
  .tech-stack {
    padding: var(--space-4xl) 0;
    background: var(--bg-primary);
    overflow: hidden;
    position: relative;
  }

  .tech-stack-header {
    text-align: center;
    margin-bottom: var(--space-3xl);
  }

  /* --- Lógica del Carrusel --- */
  .carousel-outer {
    position: relative;
    width: 100%;
  }

  .carousel-track {
    display: flex;
    gap: var(--space-xl);
    width: max-content;
    animation: scroll-infinite 90s linear infinite;
    padding: var(--space-lg);
  }

  /* Tarjeta */
  .tech-card {
    position: relative;
    width: 280px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--space-xl);

    /* Glassmorphism sutil */
    background: var(--fill-glass);
    border: 1px solid var(--border-weak);
    border-radius: var(--radius-base);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    /* Transición */
    transition:
      transform var(--transition-base),
      border-color var(--transition-base),
      box-shadow var(--transition-base);
    user-select: none;
    overflow: hidden;
  }

  /* Resplandor de fondo muy suave */
  .tech-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      var(--hero-float-bg) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity var(--transition-base);
    z-index: 0;
  }

  .tech-card:hover {
    transform: translateY(-8px);
    border-color: var(--color-accent-purple);
    box-shadow: var(--shadow-lg);
  }

  /* Resplandor tenue */
  .tech-card:hover::before {
    opacity: 0.6;
  }

  /* Estilo del Badge de Categoría */
  .tech-category {
    position: absolute;
    top: var(--space-base);
    right: var(--space-base);
    font-size: var(--font-size-2xs);
    font-weight: var(--font-weight-extrabold);
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: var(--space-2xs) var(--space-sm);
    border-radius: var(--radius-xl);
    background: rgba(219, 225, 255, 0.116);
    color: var(--fill-brand-strong);
    border: 1px solid var(--border-weak);
    backdrop-filter: blur(4px);
  }

  .gradient-icon-text {
    font-size: var(--icon-size-2xl);
    background: var(--gradient-icons);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  .tech-card {
    padding-top: var(--space-2xl);
  }

  .tech-icon {
    position: relative;
    z-index: 1;
    width: 70px;
    height: 70px;
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition-base);
  }

  .tech-card:hover .tech-icon {
    transform: scale(1.05);
  }

  .tech-content {
    position: relative;
    z-index: 1;
  }

  .tech-name {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--text-strong);
    margin-bottom: var(--space-2xs);
    letter-spacing: -0.01em;
  }

  .tech-description {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    line-height: 1.6;
    padding: 0 var(--space-2xs);
  }

  /* Difuminados Laterales */
  .fade-edge {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 15%;
    z-index: 10;
    pointer-events: none;
  }

  .fade-edge.left {
    left: 0;
    background: linear-gradient(
      to right,
      var(--bg-primary) 0%,
      transparent 100%
    );
  }

  .fade-edge.right {
    right: 0;
    background: linear-gradient(
      to left,
      var(--bg-primary) 0%,
      transparent 100%
    );
  }

  /* Animación de Carrusel */
  @keyframes scroll-infinite {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(calc(-50% - (var(--space-xl) / 2)));
    }
  }

  @media (max-width: 768px) {
    .tech-card {
      width: 250px;
      height: 310px;
    }

    .tech-stack {
      padding: var(--space-2xl) 0;
    }
  }
</style>
