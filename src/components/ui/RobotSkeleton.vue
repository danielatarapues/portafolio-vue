<template>
  <div class="skeleton-wrapper" aria-hidden="true">
    <div class="robot-silhouette">
      <div class="s-head"></div>
      <div class="s-body">
        <div class="s-core"></div>
      </div>
      <div class="s-arm l"></div>
      <div class="s-arm r"></div>
    </div>
    <div class="s-shimmer"></div>
  </div>
</template>

<style scoped>
.skeleton-wrapper {
  position: absolute;
  top: 50%;
  left: 100%;
  width: 100%;
  height: 100%;
  transform: translate(-74%, -50%) scale(1.2); /* Misma escala que el iframe */
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;
}

.robot-silhouette {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  filter: blur(15px); 
  opacity: 0.5;
}

.s-head {
  width: 180px;
  height: 150px;
  background: var(--fill-transparent);
  border-radius: 50% 50% 45% 45%;
  border: 4px solid var(--hero-float-border);
}

.s-body {
  width: 140px;
  height: 160px;
  background: var(--fill-transparent);
  border-radius: 40% 40% 50% 50%;
  border: 4px solid var(--hero-float-border);
  display: flex;
  justify-content: center;
  align-items: center;
}

.s-core {
  width: 50px;
  height: 50px;
  background: var(--color-accent-purple);
  border-radius: 50%;
  box-shadow: 0 0 30px var(--color-accent-purple);
  animation: pulse-glow 2s infinite ease-in-out;
}

.s-arm {
  position: absolute;
  width: 40px;
  height: 100px;
  background: var(--fill-weak);
  border-radius: 30px;
  top: 170px;
}

.s-arm.l { left: -50px; transform: rotate(20deg); }
.s-arm.r { right: -50px; transform: rotate(-20deg); }

.s-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    var(--hero-float-border),
    transparent
  );
  animation: move-shimmer 2.5s infinite;
}

@keyframes move-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.4; transform: scale(0.95); }
  50% { opacity: 0.9; transform: scale(1.05); }
}

  /* --- RESPONSIVE --- */
  
@media (max-width: 768px) {
  .skeleton-wrapper {
    width: 700px;
    height: 600px;
    right: -18px;
    top: 16%;
    left: auto;
    transform: scale(0.45);
    transform-origin: center right;
  }
}
</style>