<template>
  <section class="experience-timeline" id="experiencia">
    <div class="bg-grid"></div>

    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Experiencia</h2>
        <div class="header-line"></div>
      </div>

      <div class="timeline-container">
        <div class="timeline-line"></div>

        <div
          v-for="(job, index) in experiences"
          :key="index"
          class="timeline-item"
          :class="{
            'item-right': index % 2 === 0,
            'item-left': index % 2 !== 0,
          }"
        >
          <div class="timeline-dot">
            <div class="dot-inner"></div>
          </div>

          <div class="timeline-card">
            <div class="card-glass"></div>
            <span class="job-date">{{ job.date }}</span>
            <h3 class="job-company">{{ job.company }}</h3>
            <h4 class="job-role">{{ job.role }}</h4>
            <ul class="job-details">
              <li v-for="(desc, i) in job.description" :key="i">
                {{ desc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { EXPERIENCES_DATA } from '@/constants/experiences'

  const experiences = EXPERIENCES_DATA
</script>

<style scoped>
  .experience-timeline {
    padding: var(--space-4xl) 0;
    background: var(--bg-primary);
    position: relative;
    overflow: hidden;
  }

  /* Estilos de la rejilla */
  .bg-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Color de stroke débil para que cambie según el tema */
    background-image:
      linear-gradient(to right, var(--border-weak) 1px, transparent 1px),
      linear-gradient(to bottom, var(--border-weak) 1px, transparent 1px);
    background-size: 40px 40px;
    /* El mask crea un desvanecimiento hacia los bordes para que no se vea cortado */
    mask-image: radial-gradient(circle at center, black, transparent 90%);
    -webkit-mask-image: radial-gradient(
      circle at center,
      black,
      transparent 90%
    );
    pointer-events: none;
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .section-header {
    text-align: center;
    margin-bottom: var(--space-2xl);
  }

  /* Contenedor de la línea */
  .timeline-container {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: var(--space-xl) 0;
  }

  .timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border-weak);
    transform: translateX(-50%);
  }

  .timeline-line::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: var(--color-accent-purple);
    filter: blur(5px);
    border-radius: 50%;
  }

  /* Items */
  .timeline-item {
    position: relative;
    width: 50%;
    margin-bottom: var(--space-3xl);
    display: flex;
  }

  .item-right {
    margin-left: auto;
    padding-left: 50px;
    justify-content: flex-start;
  }

  .item-left {
    margin-right: auto;
    padding-right: 50px;
    justify-content: flex-end;
    text-align: right;
  }

  /* El punto neón */
  .timeline-dot {
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    background: var(--bg-primary);
    border: 2px solid var(--color-accent-purple);
    border-radius: 50%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 15px var(--color-accent-purple);
  }

  .item-right .timeline-dot {
    left: -11px;
  }
  .item-left .timeline-dot {
    right: -11px;
  }

  .dot-inner {
    width: 8px;
    height: 8px;
    background: var(--gradient-primary);
    border-radius: 50%;
  }

  /* Tarjeta Futurista */
  .timeline-card {
    position: relative;
    padding: var(--space-xl);
    background: var(--fill-transparent);
    border: 1px solid var(--border-base);
    border-radius: var(--radius-base);
    backdrop-filter: blur(12px);
    transition: var(--transition-base);
    width: 100%;
  }

  .timeline-card:hover {
    transform: translateY(-5px);
    border-color: var(--color-accent-purple);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
  }

  .job-date {
    display: inline-block;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    color: var(--color-accent-purple);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: var(--space-sm);
  }

  .job-company {
    font-size: var(--font-size-xl);
    color: var(--text-primary);
    margin-bottom: var(--space-xs);
  }

  .job-role {
    font-size: var(--font-size-base);
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-md);
  }

  .job-details {
    list-style: none;
    padding: 0;
  }

  .job-details li {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-sm);
    line-height: 1.4;
    position: relative;
  }

  .item-right .job-details li::before {
    content: '▹';
    color: var(--color-accent-purple);
    margin-right: 8px;
  }

  .item-left .job-details li::after {
    content: '◃';
    color: var(--color-accent-purple);
    margin-left: 8px;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .timeline-card {
      padding: var(--space-base);
    }

    .timeline-line {
      left: 20px;
    }

      .experience-timeline {
    padding: var(--space-2xl) 0;
  }

    .timeline-item {
      width: 100%;
      padding-left: 45px;
      padding-right: 0;
      text-align: left !important;
    }

    .item-left {
      justify-content: flex-start;
    }

    .item-right .timeline-dot,
    .item-left .timeline-dot {
      left: 9px;
    }

    .item-left .job-details li::after {
      content: none;
    }
    .item-left .job-details li::before {
      content: '▹';
      color: var(--color-accent-purple);
      margin-right: 8px;
    }
  }
</style>
