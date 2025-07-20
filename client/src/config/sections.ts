import type { ConfigField } from "./ConfigField";

export const configSections: {
  key: string;
  label: string;
  path: string;
  fields: ConfigField[];
}[] = [
  {
    key: "general",
    label: "General",
    path: "/general",
    fields: [
      {
        key: "serverName",
        label: "Server Name",
        type: "text",
        required: true,
        defaultValue: "",
        placeholder: "e.g. My Minecraft Server",
      },
      {
        key: "ipAddress",
        label: "IP Address",
        type: "text",
        required: true,
        defaultValue: "",
        placeholder: "127.0.0.1",
      },
      {
        key: "port",
        label: "Server Port",
        type: "number",
        required: true,
        defaultValue: 25565,
        placeholder: "25565",
      },
    ],
  },
  {
    key: "design",
    label: "Design",
    path: "/design",
    fields: [
      {
        key: "theme",
        label: "Theme",
        type: "text",
        required: false,
        defaultValue: "dark",
        placeholder: "light | dark",
      },
      {
        key: "fontSize",
        label: "Font Size",
        type: "number",
        required: false,
        defaultValue: 14,
        placeholder: "14",
      },
    ],
  },
];
