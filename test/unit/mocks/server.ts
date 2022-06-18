import { setupServer } from 'msw/node';
import { getWeather } from './handlers';

export const server = setupServer(...getWeather);
