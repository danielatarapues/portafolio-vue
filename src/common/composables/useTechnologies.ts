// src/composables/useTechnologies.ts
import { ref, computed } from 'vue'
import { TECHNOLOGIES_LIST } from '@/constants/technologies'

export function useTechnologies() {
  const technologies = ref(TECHNOLOGIES_LIST)
  
  // Ejemplo de lógica extra que podrías tener
  const frontendTech = computed(() => 
    technologies.value.filter(t => t.category === 'Frontend')
  )

  return {
    technologies,
    frontendTech
  }
}