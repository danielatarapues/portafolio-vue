import { ref } from 'vue'
import type { ContactFormData } from '../types'

export function useContact() {
  const isSubmitting = ref(false)
  const toast = ref({
    show: false,
    type: 'success' as 'success' | 'error',
    title: '',
    message: '',
  })

  const sendEmail = async (formData: ContactFormData) => {
    // 1. Configuración del servicio externo (FormSubmit)
    const YOUR_EMAIL = "daniela.tarapues232@gmail.com" 
    const formSubmitUrl = `https://formsubmit.co/ajax/${YOUR_EMAIL}`

    isSubmitting.value = true

    // (Timeout de 8 segundos por si el servicio tarda)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000)

    try {
      const response = await fetch(formSubmitUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nuevo mensaje de: ${formData.name}`, // Asunto personalizado para bandeja
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) throw new Error()

      // Éxito
      toast.value = {
        show: true,
        type: 'success',
        title: '¡Mensaje enviado!',
        message: `Gracias por escribirme, ${formData.name}. Te responderé muy pronto.`,
      }
      return true

    } catch (error: unknown) {
      clearTimeout(timeoutId)

      let errorMsg = 'Hubo un problema al procesar el envío.'
      
      if (error instanceof Error && error.name === 'AbortError') {
        errorMsg = 'La conexión tardó demasiado. Por favor, intenta de nuevo.'
      }

      // Error
      toast.value = {
        show: true,
        type: 'error',
        title: 'Error de envío',
        message: errorMsg,
      }
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  return { sendEmail, isSubmitting, toast }
}