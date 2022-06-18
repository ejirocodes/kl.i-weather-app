import { mount } from '@vue/test-utils';
import WeatherView from '@/modules/WeatherView.vue';
import { getWeather } from './mocks/handlers';
import axios from 'axios';

describe('WeatherView', () => {
  const wrapper = mount(WeatherView, {
    global: {
      provide: {
        $axios: axios,
      },
    },
  });

  it('Should return weather report when clicking fetch button', async () => {
    const randomWeatherBtn = await wrapper.find(
      '[data-test="random-weather-btn"]'
    );
    await randomWeatherBtn.trigger('click');
  });
});
