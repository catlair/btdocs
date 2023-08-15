declare module 'globalThis' {
  interface Window {
    twikoo: {
      init: (options: TwikooOptions) => void;
    };
  }
}

type TwikooOptions = {
  envId: string;
  el: string;
  path: string;
  lang: string;
};
