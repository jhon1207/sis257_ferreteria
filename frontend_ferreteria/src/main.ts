//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'

import 'jquery-nice-select/css/nice-select.css' 
import 'jquery-nice-select' 
// Importación de componentes principales
import App from './App.vue'
import router from './router'

// Crear la aplicación
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

// Montar la aplicación
app.mount('#app')
