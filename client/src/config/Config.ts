export interface GeneralConfig {
  serverName: string;
  ipAddress: string;
  serverPort: number;
}
export interface FeaturesConfig {
  adminPanel: boolean;
}

export interface DesignConfig {
  theme: string;
  fontSize: number;
}

export interface Config {
  general: GeneralConfig;
  features: FeaturesConfig;
  design: DesignConfig;
}

export const defaultConfig: Config = {
  general: {
    serverName: "",
    ipAddress: "",
    serverPort: 25565,
  },
  features: {
    adminPanel: false,
  },
  design: {
    theme: "light",
    fontSize: 14,
  },
};
