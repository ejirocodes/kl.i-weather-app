import { rest } from 'msw';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mock from './mock.json';

export const getWeather = [
  rest.get(
    'https://api.openweathermap.org/data/2.5/weather',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mock));
    }
  ),
];
