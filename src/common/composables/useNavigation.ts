// src/common/composables/useNavigation.ts
import { ref, onMounted, computed } from 'vue'

// Usamos <T extends string> para que reconozca SectionName
export function useNavigation<T extends string>(sectionOrder: T[]) {
  const activeSection = ref<T>(sectionOrder[0])
  const previousSection = ref<T>(sectionOrder[0])
  const hoveredSection = ref<T | null>(null)
  const isMenuOpen = ref(false)

  const targetSection = computed(() => hoveredSection.value || activeSection.value)

  const scrollClass = computed(() => {
    const currentIndex = sectionOrder.indexOf(targetSection.value as T)
    const previousIndex = sectionOrder.indexOf(previousSection.value as T)
    return currentIndex >= previousIndex ? 'move-forward' : 'move-backward'
  })

  const updateNavState = (newSection: T) => {
    if (newSection && newSection !== activeSection.value) {
      previousSection.value = activeSection.value
      activeSection.value = newSection
    }
  }

  const setHover = (section: T | null) => {
    if (section) {
      previousSection.value = targetSection.value
    } else {
      previousSection.value = (hoveredSection.value || activeSection.value) as T
    }
    hoveredSection.value = section
  }

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          // Aseguramos que el ID sea tratado como tipo T
          const id = (e.target.tagName === 'FOOTER' ? 'footer' : e.target.id) as T
          if (sectionOrder.includes(id)) {
            updateNavState(id)
          }
        }
      })
    }, { rootMargin: '-25% 0px' })

    document.querySelectorAll('section[id], footer').forEach(el => observer.observe(el))
  })

  return { 
    activeSection, 
    hoveredSection, 
    isMenuOpen, 
    scrollClass, 
    updateNavState,
    setHover
  }
}