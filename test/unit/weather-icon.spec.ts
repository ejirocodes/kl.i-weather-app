import { mount, VueWrapper } from '@vue/test-utils';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import WeatherIcon from '../../src/components/weather/WeatherIcon.vue';

const icon =
  'https://res.cloudinary.com/ejiro/image/upload/v1655434213/weather-app/broken-clouds-d_iwzn85.svg';

describe('Card.vue', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = mount(WeatherIcon, {
      props: {
        icon,
      },
    });
  });

  it('should render', () => {
    expect(wrapper.find('.icon').exists()).toBe(true);
  });
  it('should render image', () => {
    expect(wrapper.find('img').exists()).toBe(true);
  });
  it('should render image', () => {
    expect(wrapper.find('img').exists()).toBe(true);
  });
  it('should render image source', () => {
    expect(wrapper.find('img').attributes('src')).toEqual(icon);
  });
});
