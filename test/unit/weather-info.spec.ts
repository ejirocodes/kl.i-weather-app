import { describe, test, expect } from 'vitest';

describe('import WeatherInfo components', () => {
  test('should render  import as expected', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cmp = await import('@/components/weather/WeatherInfo.vue');
    expect(cmp).toBeDefined();
  });
});
