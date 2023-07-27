/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GITHUB_PAGES: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
