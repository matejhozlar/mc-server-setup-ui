export interface GeneralConfig {
  serverName: string;
  ipAddress: string;
  serverPort: number;
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
    serverName: "",
    ipAddress: "",
    serverPort: 25565,
  },
  design: {
    theme: "light",
    fontSize: 14,
  },
};
