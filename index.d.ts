import * as Geetest from 'gt3-sdk';

interface EggGeetestOptions {
  client: {
    geetest_id: string;
    geetest_key: string;
  };
  Geetest?: Geetest;
}

declare module 'egg' {
  interface Application {
    geetest: Geetest & Singleton<Geetest>;
  }

  interface EggAppConfig {
    geetest: EggGeetestOptions;
  }
}