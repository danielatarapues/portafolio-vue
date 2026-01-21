/// <reference types="vite/client" />

// Declaración para componentes de Vue
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

// Declaración para archivos PDF
declare module '*.pdf' {
  const src: string;
  export default src;
}

// Tipado para las variables de entorno (ImportMetaEnv)
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}