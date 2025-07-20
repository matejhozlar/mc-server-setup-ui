export interface GeneralConfig {
  serverName: string;
  ipAddress: string;
  serverPort: number;
}

export interface FeaturesConfig {
  adminPanel: boolean;
}

export interface CredentialsConfig {
  rconPort: number | null;
  rconPassword: string | null;
}

export interface DesignConfig {
  theme: string | null;
  fontSize: number | null;
}

export interface Config {
  general: GeneralConfig;
  credentials: CredentialsConfig;
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
  credentials: {
    rconPort: null,
    rconPassword: null,
  },
  design: {
    theme: null,
    fontSize: null,
  },
};
