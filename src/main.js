import { createApp } from 'vue'
import App from './App.vue'
import languages from './lang/index.js'
import router from './routes/index.js'
// import './assets/main.css'

const app = createApp(App)
app.use(languages)
app.use(router)
app.mount('#app')
