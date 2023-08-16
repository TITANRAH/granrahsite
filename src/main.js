import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import { plugin, defaultConfig} from '@formkit/vue'
import config from '../formkit.config'
import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

// vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//fin vuetify

// init vuetify
const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)
app.use(plugin, defaultConfig(config))
app.use(createPinia())
app.use(router)

// use vuetify
app.use(vuetify)

app.mount('#app')
