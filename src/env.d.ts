/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_OPENWEATHER_BASEURL: string;
  readonly VITE_APP_OPENWEATHER_APIKEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
