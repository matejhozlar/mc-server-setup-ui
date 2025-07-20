import { createContext } from "react";
import type { Config } from "../config/Config";

export interface ConfigContextType {
  config: Config;
  updateConfig: <K extends keyof Config>(section: K, value: Config[K]) => void;
}

export const ConfigContext = createContext<ConfigContextType | undefined>(
  undefined
);
