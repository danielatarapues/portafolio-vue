<template>
    <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-row">
            <div class="form-group">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" id="name" v-model="form.name" class="form-input" placeholder="Tu nombre completo"
                    required />
            </div>
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" v-model="form.email" class="form-input" placeholder="tu@email.com"
                    required />
            </div>
        </div>

        <div class="form-group">
            <label for="subject" class="form-label">Asunto</label>
            <input type="text" id="subject" v-model="form.subject" class="form-input"
                placeholder="¿En qué puedo ayudarte?" required />
        </div>

        <div class="form-group">
            <label for="message" class="form-label">Mensaje</label>
            <textarea id="message" v-model="form.message" class="form-textarea"
                placeholder="Cuéntame sobre tu proyecto..." rows="5" required></textarea>
        </div>

        <button type="submit" class="form-submit btn btn-primary" :disabled="loading">
            <span>{{ loading ? 'Enviando...' : 'Enviar mensaje' }}</span>
            <i v-if="!loading" class="pi pi-send" style="margin-left: 8px"></i>
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ loading: boolean }>();

const emit = defineEmits<{
    (e: 'submit', form: { name: string; email: string; subject: string; message: string }): void
}>();

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const handleSubmit = () => {
    emit('submit', { ...form.value });
};

const resetForm = () => {
    form.value = { name: '', email: '', subject: '', message: '' };
};

// Método visible para el ref del padre
defineExpose({ resetForm });
</script>

<style scoped>
.contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    width: 100%;
}


.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.form-label {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--text-primary);
}

.form-input,
.form-textarea {
    background: var(--bg-primary);
    border: 1px solid var(--border-base);
    border-radius: var(--radius-sm);
    padding: var(--space-sm) var(--space-base);
    color: var(--text-primary);
    font-family: inherit;
    transition: all var(--transition-base);
}

.form-input:focus,
.form-textarea:focus {
    outline: none;
    border-color: var(--accent-purple);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
    color: var(--text-muted);
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

.form-submit {
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    min-width: 160px;
    justify-content: center;
}

.form-submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.form-submit svg {
    width: 16px;
    height: 16px;
}


@media (max-width: 768px) {
    .form-row {
        grid-template-columns: 1fr;
    }

}

@media (max-width: 480px) {
    .form-submit {
        width: 100%;
    }

}
</style>