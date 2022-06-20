/* eslint-disable @typescript-eslint/ban-ts-comment */
import { mount } from '@vue/test-utils';
// @ts-ignore
import WeatherView from '@/modules/WeatherView.vue';
import axios from 'axios';
import weather from './mocks/mock.json';
// @ts-ignore
import WeatherInfo from '@/components/weather/WeatherInfo.vue';
// @ts-ignore
import inputComponent from '@/components/shared/SearchInput.vue';

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

    // weatherInfo weather props be defined after api call
    expect(weatherInfo.props('weather')).toBeDefined();
    expect(weatherInfo.find('[data-test="temperature"]').text()).toBe('9c');
  });
  it('Should return weather report when searched', async () => {
    const searchInput = mount(inputComponent, {
      props: {
        placeholder: 'Search city',
        value: 'Nigeria',
      },
    });
    expect(searchInput).toBeDefined();
    await searchInput.vm.$nextTick();
    const searchBtn = await wrapper.find('[data-test="search-btn"]');
    await searchBtn.trigger('click');
    expect(wrapper.vm.weather).toBeDefined();
    expect(weatherInfo.props('weather')).toBeDefined();
  });
});
