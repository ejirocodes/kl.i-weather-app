import { createRouter, createWebHistory } from 'vue-router';
import WeatherView from '../modules/WeatherView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WeatherView,
    },
  ],
});

export default router;
