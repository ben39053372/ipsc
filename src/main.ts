import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from './i18n';
import router from './router';
import store, { key } from './store';
import './styles/global.css';
import './styles/colors.css';
import './styles/font.css';
import './styles/spacing.css';

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(store, key);
app.mount('#app');
