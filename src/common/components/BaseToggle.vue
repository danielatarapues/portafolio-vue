<template>
  <div 
    class="theme-switch" 
    @click="$emit('update:modelValue', !modelValue)" 
    role="button" 
    :aria-pressed="modelValue"
    :aria-label="ariaLabel"
    tabindex="0"
    @keydown.enter="$emit('update:modelValue', !modelValue)"
    @keydown.space.prevent="$emit('update:modelValue', !modelValue)"
  >
    <div class="switch-track" :class="{ 'switch-track--active': modelValue }">
      <div class="switch-thumb" :class="{ 'switch-thumb--active': modelValue }">
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean;
  ariaLabel?: string;
}

withDefaults(defineProps<Props>(), {
  ariaLabel: 'Cambiar tema de color'
});

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();
</script>

<style scoped>
.theme-switch { 
  position: relative; 
  width: 52px; 
  height: 28px; 
  cursor: pointer; 
  outline: none;
}

.theme-switch:focus-visible .switch-track {
  box-shadow: 0 0 0 2px var(--bg-primary), 0 0 0 4px var(--color-accent-purple);
}

.switch-track { 
  position: absolute; 
  inset: 0; 
  background: var(--fill-strong); 
  border: 1px solid var(--color-accent-purple);
  border-radius: 50px; 
  transition: all 0.4s ease; 
}

.switch-track--active { 
  border-color: var(--color-accent-purple);
  background: var(--fill-strong);
} 

.switch-thumb { 
  position: absolute; 
  top: 2px; 
  left: 2px; 
  width: 22px; 
  height: 22px; 
  background: var(--fill-strong-inverse); 
  border-radius: 50%;
  
  /* ALINEACIÓN CRÍTICA */
  display: flex; 
  align-items: center; 
  justify-content: center;
  
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.switch-thumb--active { 
  transform: translateX(24px); 
}

/* Forzar que el icono inyectado no tenga dimensiones que lo desplacen */
:deep(i.pi) {
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  line-height: 0 !important; /* Evita que el line-height del texto lo empuje hacia abajo */
  margin: 0 !important;
  padding: 0 !important;
  color: var(--fill-strong);
}
</style>