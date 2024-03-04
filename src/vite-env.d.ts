/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPOTIFY_CLIENT_ID: string;
  readonly VITE_SPOTIFY_CLIENT_SECRET: string;
  readonly VITE_DEV_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
