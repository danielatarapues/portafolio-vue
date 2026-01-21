import type { Technology } from "@/common/types"


export const TECHNOLOGIES_LIST: Technology[] = [
  { name: "React", category: "Frontend", description: "Interfaces interactivas.", icon: "custom-react" },
  { name: "Next.js", category: "Frontend", description: "Framework SSR y estático.", icon: "pi pi-desktop" },
  { name: "Angular", category: "Frontend", description: "Aplicaciones escalables.", icon: "pi pi-prime" },
  { name: "Vue.js", category: "Frontend", description: "Framework progresivo.", icon: "pi pi-bolt" },
  { name: "Tailwind CSS", category: "Frontend", description: "Estilizado moderno.", icon: "pi pi-palette" },
  { name: "React Native", category: "Mobile", description: "Apps nativas iOS/Android.", icon: "pi pi-mobile" },
  { name: "Figma", category: "Design", description: "Prototipado y sistemas de diseño.", icon: "pi pi-pencil" },
  { name: "AI Integration", category: "Backend & AI", description: "OpenAI API", icon: "pi pi-sparkles" },
  { name: "Python & SQL", category: "Backend & AI", description: "Lógica y manejo de datos.", icon: "pi pi-database" },
  { name: "WordPress", category: "Tools", description: "Gestión de contenidos.", icon: "pi pi-globe" },
  { name: "GitHub", category: "Tools", description: "Control de versiones Git.", icon: "pi pi-github" }
]