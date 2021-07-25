import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from './i18n';
import router from './router';
import store, { key } from './store';
import './index.css';

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(store, key);
app.mount('#app');
