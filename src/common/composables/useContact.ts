import { ref } from 'vue';
import type { ContactFormData } from '../types';

export function useContact() {
  const isSubmitting = ref(false);
  const toast = ref({
    show: false,
    type: 'success' as 'success' | 'error',
    title: '',
    message: ''
  });

  const sendEmail = async (formData: ContactFormData) => {
    isSubmitting.value = true;

    // 1. Creamos el controlador para abortar la petición
    const controller = new AbortController();
    // 2. Definimos un tiempo límite (ej. 5000ms = 5 segundos)
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      
      const response = await fetch(`${apiUrl}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal, // 3. Pasamos la señal al fetch
      });

      // Limpiamos el timer si la respuesta llega a tiempo
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error();

      toast.value = {
        show: true,
        type: 'success',
        title: '¡Mensaje recibido!',
        message: 'Me pondré en contacto contigo pronto.'
      };
      return true;
    } catch (error: any) {
      clearTimeout(timeoutId); // También limpiamos en caso de error

      let errorMsg = 'No pudimos conectar con el servidor.';
      
      // Personalizamos el mensaje si fue por timeout
      if (error.name === 'AbortError') {
        errorMsg = 'No te preocupes, puedes contactarme directamente aquí:';
      }

      toast.value = {
        show: true,
        type: 'error',
        title: 'Error al enviar el mensaje',
        message: errorMsg
      };
      return false;
    } finally {
      isSubmitting.value = false;
    }
  };

  return { sendEmail, isSubmitting, toast };
}