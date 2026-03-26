import { ref } from 'vue'
import { TECHNOLOGIES_LIST } from '@/constants/technologies'

export function useTechnologies() {
  const technologies = ref(TECHNOLOGIES_LIST)

  return {
    technologies
  }
}