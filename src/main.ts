import { createApp } from 'vue';
import './style.css';
import VueSpotlight from './plugins/vue-spotlight'

const app = createApp({});
app.use(VueSpotlight);

app.mount('#app');