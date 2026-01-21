<template>
  <section id="inicio" class="hero">
    <div class="hero-bg-iframe">
      <RobotSkeleton v-if="!isRobotLoaded" />

      <iframe
        src="https://my.spline.design/greetingrobot-JhV02AkIg618aoeLduac4lQc/"
        frameborder="0"
        loading="lazy"
        title="Robot 3D Interactivo"
        :class="{ 'is-visible': isRobotLoaded }"
        @load="handleRobotLoad"
      ></iframe>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="hero-title-line">Software Developer &</span>
            <span class="hero-title-highlight"> UI Designer</span>
            <span class="hero-title-line"> enfocada en crear productos</span>
            <span class="hero-title-highlight"> digitales con IA.</span>
          </h1>

          <p class="hero-description">
            Tecnóloga Superior en Desarrollo de Software con experiencia en el
            ecosistema de
            <strong>JavaScript (React, Next.js, Angular). </strong>
            Me enfoco en crear soluciones digitales que combinan estética y
            funcionalidad, integrando tecnologías de
            <strong>IA</strong>
            para optimizar la experiencia del usuario.
          </p>

          <div class="hero-actions">
            <button
              @click="goTo('https://calendly.com/daniela-tarapues232/30min')"
              class="btn btn-primary"
              aria-label="Agendar Cita en Calendly"
            >
              <span>Agendar Cita</span>
              <i class="pi pi-calendar"></i>
            </button>

            <div class="cv-wrapper">
              <button
                @click="openCV"
                class="btn btn-cv-main"
                aria-label="Abrir currículum en una nueva pestaña"
              >
                <span>Ver CV</span>
              </button>
              <button
                @click="downloadCV"
                class="btn btn-cv-icon"
                title="Descargar PDF"
                aria-label="Descargar currículum en formato PDF"
              >
                <i class="pi pi-download"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import RobotSkeleton from '@/components/ui/RobotSkeleton.vue'
  import cv from '@/assets/CV_Tarapues_Daniela.pdf'

  const isRobotLoaded = ref(false)

  const handleRobotLoad = () => {
    isRobotLoaded.value = true
  }

  onMounted(() => {
    // Respaldo de seguridad por si Spline tarda mucho
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      window.setTimeout(() => {
        isRobotLoaded.value = true
      }, 5000)
    }
  })

  const goTo = (url: string) => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      window.open(url, '_blank')
    }
  }
  const openCV = (): void => {
    // eslint-disable-next-line no-undef
    window.open(cv, '_blank')
  }

  const downloadCV = (): void => {
    // eslint-disable-next-line no-undef
    const link = document.createElement('a')
    link.href = cv
    link.download = 'CV_Tarapues_Daniela.pdf'
    // eslint-disable-next-line no-undef
    document.body.appendChild(link)
    link.click()
    // eslint-disable-next-line no-undef
    document.body.removeChild(link)
  }
</script>

<style scoped>
  /* Estructura Base */
  .hero {
    display: flex;
    align-items: center;
    position: relative;
    padding-top: var(--space-4xl);
    background: var(--bg-hero);
    padding: var(--space-4xl) 0;
    overflow: hidden;
    min-height: 100vh;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3xl);
    align-items: center;
  }

  iframe {
    opacity: 0;
    transition: opacity 0.8s ease-out;
  }

  iframe.is-visible {
    opacity: 1;
  }

  /* Capa del Robot (Fondo) */
  .hero-bg-iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
  }

  .hero-bg-iframe iframe {
    position: absolute;
    top: 50%;
    left: 100%;
    width: 100%;
    height: 100%;
    border: none;
    transform-origin: center center;
    transform: translate(-74%, -50%) scale(1.2);
    mix-blend-mode: lighten;
  }

  /* Hacer que el contenido no bloquee el iframe */
  .hero-content,
  .hero-text,
  .hero-visual {
    pointer-events: none;
  }

  /* Ajustado para incluir button y quitar estilos por defecto */
  .hero-actions button,
  a,
  .btn,
  button {
    pointer-events: auto;
  }

  .hero-content,
  .hero-text {
    position: relative;
    z-index: 10;
  }

  .hero-text span {
    pointer-events: none;
  }

  .hero-text {
    padding-top: var(--space-2xl);
    animation: fadeInUp 0.8s ease-out;
  }

  .hero-title {
    font-size: var(--font-size-6xl);
    font-weight: var(--font-weight-bold);
    line-height: 1.1;
    margin-bottom: var(--space-xl);
    display: inline;
  }

  .hero-title-line,
  .hero-title-highlight {
    display: inline;
    white-space: normal;
  }

  .hero-title-highlight {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: var(--font-size-6xl);
  }

  .hero-description {
    font-size: var(--font-size-lg);
    color: var(--text-strong);
    margin-bottom: var(--space-2xl);
    line-height: 1.7;
    margin-top: var(--space-base);
  }

  .hero-actions {
    display: flex;
    gap: var(--space-base);
    align-items: center;
  }

  .cv-wrapper {
    display: flex;
    align-items: center;
    background: var(--bg-card);
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    padding: 0; /* Asegurar que no haya padding interno que afecte a los botones */
    overflow: hidden;
  }

  .cv-wrapper:hover {
    border-color: var(--color-accent-purple);
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }

  .btn-cv-main,
  .btn-cv-icon {
    background: transparent;
    color: var(--text-primary);
    padding: var(--space-base) var(--space-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    font-weight: var(--font-weight-medium);
    height: 100%;
  }

  .btn-cv-main {
    padding-right: var(--space-lg);
    border-right: 1px solid var(--border-base);
    border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  }

  .btn-cv-main:hover,
  .btn-cv-icon:hover {
    background: var(--fill-weak);
  }

  .btn-cv-icon {
    color: var(--color-accent-purple);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  }

  /* Decoración de Fondo */
  .hero-bg-decoration {
    position: absolute;
    top: 0;
    right: 0;
    width: 600px;
    height: 600px;
    background: var(--hero-decoration-bg);
    border-radius: 50%;
    transform: translate(30%, -30%);
    pointer-events: none;
    transition: background var(--transition-base);
  }

  /* Animaciones */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* --- RESPONSIVE --- */

  @media (max-width: 768px) {
    /* Forzamos que la sección principal permita bloques independientes */
    .hero {
      padding-top: var(--space-4xl);
      height: auto;
      min-height: 100vh;
    }

    /* El contenedor principal como bloque */
    .hero-content {
      display: block;
      width: 100%;
      padding: 0;
    }

    /* --- Título --- */
    .hero-title {
      display: block;
      width: 100%;
      text-align: left !important;
      margin: 0 0 10px 0 !important;
      font-size: var(--font-size-5xl);
      line-height: 1.2;
    }

    .hero-title-highlight {
      font-size: var(--font-size-5xl);
    }

    /* --- Contenedor texto + robot) --- */
    .hero-text {
      display: block;
      position: relative;
      width: 100%;
      min-height: 300px;
    }

    .hero-description {
      text-align: left !important;
      width: 65%;
      margin-left: 0 !important;
      margin-right: auto;
      font-size: var(--font-size-base);
      line-height: 1.5;
      margin-bottom: var(--space-xl);
    }

    /* Botones */
    .hero-actions {
      display: flex;
      flex-direction: column;
      align-items: flex-start !important;
      gap: var(--space-sm);
      width: 65%;
      /* Misma anchura que la descripción */
    }

    .cv-wrapper {
      border: none;
    }

    .btn-primary,
    .cv-wrapper {
      width: 160px;
      margin-left: 0;
    }

    .btn-cv-main {
      width: 8rem;
    }

    .btn-cv-main,
    .btn-cv-icon {
      padding: var(--space-sm) var(--space-base);
    }

    /* --- Robot a la derecha --- */
    .hero-bg-iframe {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
      overflow: visible;
    }

    .hero-bg-iframe iframe {
      position: absolute;
      width: 700px;
      height: 600px;
      right: -18px;
      top: 16%;
      left: auto;
      border: none;
      transform: scale(0.45);
      transform-origin: center right;
      mix-blend-mode: lighten;
      pointer-events: auto;
    }
  }

  @media (max-width: 700px) {
    .hero-bg-iframe iframe {
      top: 12%;
      right: -6%;
    }

    .hero-title {
      font-size: var(--font-size-3xl);
    }

    .hero-title-highlight {
      font-size: var(--font-size-3xl);
    }
  }

  @media (max-width: 570px) {
    .hero-bg-iframe iframe {
      top: 15%;
      right: -11%;
    }
  }

  @media (max-width: 476px) {
    .hero-bg-iframe iframe {
      top: 14%;
      right: -13%;
    }
  }

  @media (max-width: 470px) {
    .hero-bg-iframe iframe {
      top: 16%;
    }
  }

  @media (max-width: 445px) {
    .hero-bg-iframe iframe {
      top: 10%;
      transform: scale(0.35);
    }

    .hero-text {
      display: flex;
      flex-direction: column;
      min-height: auto;
    }

    .hero-description {
      width: 65%;
      margin-bottom: var(--space-xl);
    }

    /* Botones */
    .hero-actions {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: var(--space-base);
      align-items: stretch !important;
      pointer-events: auto;
    }

    /* Estilizamos los botones individuales y el wrapper del CV */
    .btn-primary,
    .cv-wrapper {
      width: 100% !important; /* Ocupa todo el contenedor */
      justify-content: center;
      box-sizing: border-box;
    }

    .btn-cv-main {
      flex-grow: 1;
      justify-content: center;
    }
  }

  @media (max-width: 430px) {
    .hero-bg-iframe iframe {
      top: 14%;
    }
  }

  @media (max-width: 400px) {
    .hero-title {
      font-size: var(--font-size-2xl);
    }

    .hero-title-highlight {
      font-size: var(--font-size-2xl);
    }

    .hero-bg-iframe iframe {
      width: 600px;
      height: 600px;
      right: -20px;
      top: 8%;
      transform: scale(0.3);
      /* Aún más pequeño en pantallas mini */
    }
  }

  @media (max-width: 370px) {
    .hero-bg-iframe iframe {
      top: 12%;
    }
  }

  @media (max-width: 350px) {
    .hero-bg-iframe iframe {
      top: 15%;
    }
  }
</style>
