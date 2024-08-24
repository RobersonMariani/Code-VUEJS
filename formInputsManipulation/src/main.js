import { createApp } from 'vue'
import App from './App.vue'
import { vMaska } from "maska/vue"
import moment from 'moment';

const app = createApp(App)

// Configura o locale para pt-br
moment.locale('pt-br')

// Registra a diretiva globalmente
app.directive('maska', vMaska)
// Disponibiliza o moment globalmente
app.config.globalProperties.$moment = moment

app.mount('#app')
