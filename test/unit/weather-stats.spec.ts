import { describe, it, beforeEach, expect } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import WeatherStats from '../../src/components/weather/WeatherStats.vue';

const icon =
  'https://res.cloudinary.com/ejiro/image/upload/v1655434213/weather-app/broken-clouds-d_iwzn85.svg';

describe('WeatherStats', () => {
  const wrapper = mount(WeatherStats, {
    props: {
      name: 'Pressure',
      icon,
      stat: 22,
    },
  });

  it('should render weather icon', () => {
    expect(wrapper.find('img').attributes('src')).toEqual(icon);
  });
  it('should render name', () => {
    expect(wrapper.find('[data-test="name"]').exists()).toBe(true);
  });
  it('should render name content', () => {
    expect(wrapper.find('[data-test="name"]').html()).toContain('Pressure');
  });
  it('should render stat', () => {
    expect(wrapper.find('[data-test="stat"]').exists()).toBe(true);
  });
  it('should render stat content', () => {
    expect(wrapper.find('[data-test="stat"]').html()).toContain('22');
  });
});
