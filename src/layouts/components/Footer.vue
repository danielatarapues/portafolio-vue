<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <div class="logo">
              <img
                :src="isDark ? LogoWhite : LogoDark"
                alt="Logotipo de D-kit por Daniela Tarapues"
                width="80"
              />
            </div>
            <p class="footer-description">
              Diseñadora y desarrolladora UX/UI enfocada en crear experiencias
              digitales funcionales, atractivas y reales para impulsar tu
              negocio.
            </p>
            <div class="social-links">
              <a
                href="https://www.linkedin.com/in/daniela-tarapues232004"
                class="social-link"
                aria-label="LinkedIn"
              >
                <i class="pi pi-linkedin"></i>
              </a>
              <a
                href="https://github.com/danielatarapues?tab=repositories"
                class="social-link"
                aria-label="GitHub"
              >
                <i class="pi pi-github"></i>
              </a>
            </div>
          </div>

          <div class="footer-links">
            <div class="link-group">
              <h3 class="link-group-title">Navegación</h3>
              <ul class="link-list">
                <li><a href="#inicio" class="footer-link">Inicio</a></li>
                <li>
                  <a href="#tecnologias" class="footer-link">
                    Tecnologías y Herramientas
                  </a>
                </li>
                <li>
                  <a href="#experiencia" class="footer-link">Experiencia</a>
                </li>
              </ul>
            </div>

            <div class="link-group">
              <h3 class="link-group-title">Servicios</h3>
              <ul class="link-list">
                <li><span class="footer-link">Diseño UX/UI</span></li>
                <li><span class="footer-link">Desarrollo Frontend</span></li>
                <li><span class="footer-link">Consultoría Digital</span></li>
                <li><span class="footer-link">Optimización UX</span></li>
              </ul>
            </div>

            <div class="link-group">
              <h3 class="link-group-title">Contacto</h3>
              <ul class="link-list">
                <li>
                  <a
                    class="contact-item"
                    href="mailto:daniela.tarapues232@gmail.com"
                  >
                    <i class="pi pi-envelope"></i>
                    daniela.tarapues232@gmail.com
                  </a>
                </li>
                <li>
                  <a class="contact-item" href="tel:+593996214772">
                    <i class="pi pi-phone"></i>
                    +593 99 621 4772
                  </a>
                </li>
                <li>
                  <span class="contact-item">
                    <i class="pi pi-map-marker"></i>
                    Ecuador, Quito
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="contact-form-section">
          <h3 class="contact-form-title">¿Listo para empezar?</h3>
          <p class="contact-form-subtitle">
            Cuéntame sobre tu idea y trabajemos juntos para hacerla realidad.
          </p>
          <ContactForm
            ref="contactFormRef"
            :loading="isSubmitting"
            @submit="handleFormSubmit"
          />
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">
            © {{ currentYear }} D-kit. Todos los derechos reservados.
          </p>

          <div class="footer-tech-stack">
            <span>Built with:</span>
            <div class="tech-icons">
              <span class="tech-tag">Vite</span>
              <span class="tech-tag">Vue 3</span>
              <span class="tech-tag">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <FuturisticToast
    v-model="toast.show"
    :type="toast.type"
    :title="toast.title"
    :message="toast.message"
  />
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'

  // Logos
  import LogoWhite from '@/assets/logos/logowhite.svg'
  import LogoDark from '@/assets/logos/logodark.svg'
  import FuturisticToast from '@/components/ui/FuturisticToast.vue'
  import { useDark } from '@vueuse/core'
  import ContactForm from '@/components/forms/ContactForm.vue'
  import { useContact } from '@/common/composables/useContact'
  import type { ContactFormData, ContactFormInstance } from '@/common/types'

  const { sendEmail, isSubmitting, toast } = useContact()

  const contactFormRef = ref<ContactFormInstance | null>(null)

  const handleFormSubmit = async (formData: ContactFormData) => {
    const success = await sendEmail(formData)
    if (success) {
      contactFormRef.value?.resetForm()
    }
  }
  // useDark es reactivo globalmente. Si el Header cambia el tema,
  // isDark se actualizará automáticamente.
  const isDark = useDark({
    selector: 'html',
    attribute: 'data-theme',
    storageKey: 'theme',
    valueDark: 'dark',
    valueLight: 'light',
  })

  const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
  .footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-base);
    position: relative;
    overflow: hidden;
    padding-bottom: var(--space-sm);
  }

  .footer-content {
    padding: var(--space-2xl) 0 var(--space-2xl);
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }

  .footer-main {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: var(--space-4xl);
    margin-bottom: var(--space-xl);
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    margin-bottom: var(--space-base);
  }

  .footer-description {
    color: var(--text-secondary);
    line-height: 1.7;
    max-width: 400px;
  }

  .social-links {
    display: flex;
    gap: var(--space-base);
  }

  .social-link {
    width: var(--space-2xl);
    height: var(--space-2xl);
    background: var(--bg-card);
    border: 1px solid var(--border-base);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: all var(--transition-base);
    text-decoration: none;
  }

  .social-link:hover {
    background: var(--color-accent-purple);
    border-color: var(--color-accent-purple);
    color: var(--text-primary);
    transform: translateY(-2px);
  }

  .social-link svg {
    width: var(--icon-size-md);
    height: var(--icon-size-md);
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-2xl);
  }

  .link-group-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
  }

  .link-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .footer-link {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color var(--transition-base);
    font-size: var(--font-size-sm);
  }

  .footer-link:hover {
    color: var(--color-accent-purple);
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
  }

  .contact-item svg {
    width: var(--icon-size-sm);
    height: var(--icon-size-sm);
    flex-shrink: 0;
  }

  .contact-form-section {
    background: var(--bg-card);
    border: 1px solid var(--border-base);
    border-radius: var(--radius-xl);
    padding: var(--space-3xl);
    backdrop-filter: blur(10px);
  }

  .contact-form-title {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-semibold);
    color: var(--text-primary);
    margin-bottom: var(--space-2xs);
  }

  .contact-form-subtitle {
    color: var(--text-secondary);
    margin-bottom: var(--space-2xl);
    line-height: 1.6;
  }

  .footer-bottom {
    border-top: 1px solid var(--border-base);
    padding-top: var(--space-xl);
    padding-bottom: var(--space-base);
  }

  .footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
  }

  .footer-tech-stack {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: var(--font-size-sm);
    color: var(--text-muted);
  }

  .tech-icons {
    display: flex;
    gap: var(--space-xs);
  }

  .tech-tag {
    background: var(--bg-primary);
    border: 1px solid var(--border-base);
    padding: var(--space-2xs) var(--space-xs);
    border-radius: var(--radius-xs);
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
    transition: all 0.3s ease;
  }

  .tech-tag:hover {
    border-color: var(--accent-purple);
    color: var(--accent-purple);
  }

  @media (max-width: 1024px) {
    .footer-main {
      grid-template-columns: 1fr;
      gap: var(--space-3xl);
    }

    .footer-links {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* --- RESPONSIVE --- */

  @media (max-width: 768px) {
    .footer-content {
      padding: var(--space-3xl) 0 var(--space-xl);
    }

    .footer-links {
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }

    .contact-form-section {
      padding: var(--space-xl) var(--space-lg);
    }

    .contact-form-subtitle {
      margin-bottom: var(--space-xl);
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .footer-bottom-content {
      flex-direction: column;
      gap: var(--space-lg);
      text-align: center;
    }

    .social-links {
      justify-content: center;
    }

    .footer-description {
      max-width: 100%;
      text-align: center;
    }

    .logo {
      justify-content: center;
    }

    .footer-bottom-content {
      flex-direction: column;
      gap: var(--space-base);
      text-align: center;
    }

    .footer-tech-stack {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .social-links {
      flex-wrap: wrap;
    }
  }
</style>
