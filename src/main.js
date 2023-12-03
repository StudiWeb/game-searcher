import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/mira/theme.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Rating from 'primevue/rating'
import Galleria from 'primevue/galleria'
import InputText from 'primevue/inputtext';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Card', Card)
app.component('Button', Button)
app.component('Tag', Tag)
app.component('Rating', Rating)
app.component('Galleria', Galleria)
app.component('InputText', InputText)

app.mount('#app')
