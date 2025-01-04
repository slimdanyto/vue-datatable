import { createApp } from 'vue'
import App from './App.vue'
import { DataTablePlugin } from '.'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(DataTablePlugin)

app.mount('#app')
