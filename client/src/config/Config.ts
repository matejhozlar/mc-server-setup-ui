export interface GeneralConfig {
  appName: string;
  version: string;
}

export interface DesignConfig {
  theme: string;
  fontSize: number;
}

export interface Config {
  general: GeneralConfig;
  design: DesignConfig;
}

export const defaultConfig: Config = {
  general: {
    appName: "",
    version: "",
  },
  design: {
    theme: "light",
    fontSize: 14,
  },
};
