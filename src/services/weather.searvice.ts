import type { Weather } from '@/types/interfact';
import type { AxiosResponse, AxiosStatic } from 'axios';

export const getWeatherLatLng = (
  http: AxiosStatic,
  lat: number,
  lng: number
): Promise<AxiosResponse<Weather>> => {
  return http.get(
    `?lat=${lat}&lon=${lng}&appid=${
      import.meta.env.VITE_APP_OPENWEATHER_APIKEY
    }`
  );
};

export const getWeather = (
  http: AxiosStatic,
  location: string
): Promise<AxiosResponse<Weather>> => {
  return http.get(
    `?q=${location}&appid=${import.meta.env.VITE_APP_OPENWEATHER_APIKEY}`
  );
};
