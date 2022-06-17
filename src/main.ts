import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/tailwind.css';

import App from './App.vue';
import router from './router';
import { axiosInstance as axios } from './config/axios.config';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.provide('$axios', axios);

app.mount('#app');
