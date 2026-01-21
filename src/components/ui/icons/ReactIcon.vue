<template>
  <svg viewBox="0 0 24 24" class="react-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="react-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color: var(--gradient-custom-icon-primary)" />
        <stop offset="100%" style="stop-color: var(--gradient-custom-icon-secondary)" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="2" fill="url(#react-grad)" />
    <g stroke="url(#react-grad)" stroke-width="1.2" fill="none">
      <ellipse rx="10" ry="4.5" transform="rotate(0 12 12)" cx="12" cy="12" />
      <ellipse rx="10" ry="4.5" transform="rotate(60 12 12)" cx="12" cy="12" />
      <ellipse rx="10" ry="4.5" transform="rotate(120 12 12)" cx="12" cy="12" />
    </g>
  </svg>
</template>

<style scoped>
.react-svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style>