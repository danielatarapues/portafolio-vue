// Define la estructura del formulario de contacto
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormInstance {
  resetForm: () => void;
}

// Define la estructura de los testimonios
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

// Define la estructura de la experiencia laboral
export interface Experience {
  date: string;
  company: string;
  role: string;
  description: string[];
}

// 2. Definimos la interfaz para los datos
export interface Technology {
  name: string;
  category: string;
  description: string;
  icon: string; 
}