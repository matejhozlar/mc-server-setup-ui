import { useState } from "react";
import type { ReactNode } from "react";
import type { Config } from "../types/Config";
import { ConfigContext } from "./ConfigContext";

const defaultConfig: Config = {
  general: {
    appName: "",
    version: "",
  },
  design: {
    theme: "light",
    fontSize: 14,
  },
};

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<Config>(defaultConfig);

  const updateConfig = <K extends keyof Config>(
    section: K,
    value: Config[K]
  ) => {
    setConfig((prev) => ({ ...prev, [section]: value }));
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};
