<template>
  <div 
    class="theme-switch" 
    @click="$emit('update:modelValue', !modelValue)" 
    role="button" 
    :aria-label="ariaLabel"
  >
    <div class="switch-track" :class="{ 'switch-track--active': modelValue }">
      <div class="switch-thumb" :class="{ 'switch-thumb--active': modelValue }">
        <slot name="icon">
          </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Usamos una interfaz para definir las props en TypeScript
interface Props {
  modelValue: boolean;
  ariaLabel?: string;
}

// Definimos las props con valores por defecto
withDefaults(defineProps<Props>(), {
  ariaLabel: 'Cambiar estado'
});

// Definimos los emits tipados
defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();
</script>

<style scoped >
.theme-switch { position: relative; width: 56px; height: 28px; cursor: pointer; }
.switch-track { position: absolute; inset: 0; background: var(--fill-strong); border-radius: 50px; transition: background 0.4s; }
.switch-track--active { background: var(--fill-strong); } 
.switch-thumb { 
  position: absolute; top: 2px; left: 2px; width: 24px; height: 24px; 
  background: var(--fill-strong-inverse); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.switch-thumb--active { transform: translateX(28px); }
</style>