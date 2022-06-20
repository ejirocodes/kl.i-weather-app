/* eslint-disable @typescript-eslint/ban-ts-comment */
import { mount } from '@vue/test-utils';
// @ts-ignore
import WeatherView from '@/modules/WeatherView.vue';
import axios from 'axios';
import weather from './mocks/mock.json';
// @ts-ignore
import WeatherInfo from '@/components/weather/WeatherInfo.vue';

describe('WeatherView', () => {
  const wrapper = mount(WeatherView, {
    global: {
      provide: {
        $axios: axios,
      },
    },
  });
  const weatherInfo = mount(WeatherInfo, {
    props: {
      weather,
    },
  });

  it('Should return weather report when clicking fetch button', async () => {
    const randomWeatherBtn = await wrapper.find(
      '[data-test="random-weather-btn"]'
    );
    await randomWeatherBtn.trigger('click');

    expect(wrapper.vm.weather).toBeDefined();

    // weatherInfo weather props be defined
    expect(weatherInfo.props('weather')).toBeDefined();
    expect(weatherInfo.find('[data-test="temperature"]').text()).toBe('9c');
  });
});
