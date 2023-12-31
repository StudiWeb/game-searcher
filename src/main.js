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
import InputText from 'primevue/inputtext'
import AutoComplete from 'primevue/autocomplete'
import Dialog from 'primevue/dialog'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import ScrollPanel from 'primevue/scrollpanel'
import Menu from 'primevue/menu';
import Dropdown from 'primevue/dropdown';


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
app.component('AutoComplete', AutoComplete)
app.component('Dialog', Dialog)
app.component('DataView', DataView)
app.component('DataViewLayoutOptions', DataViewLayoutOptions)
app.component('ScrollPanel', ScrollPanel)
app.component('Menu', Menu)
app.component('Dropdown', Dropdown)

app.mount('#app')
