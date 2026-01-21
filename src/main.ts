import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Galleria from 'primevue/galleria'


const app = createApp(App)

app.use(PrimeVue)
app.component('Galleria', Galleria)

app.mount('#app')
