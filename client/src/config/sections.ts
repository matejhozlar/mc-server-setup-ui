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
        tooltip: "The name of your Minecraft Server",
      },
      {
        key: "ipAddress",
        label: "IP Address",
        type: "text",
        required: true,
        defaultValue: "",
        placeholder: "127.0.0.1",
        tooltip: "IP Address of your Minecraft Server",
      },
      {
        key: "serverPort",
        label: "Server Port",
        type: "number",
        required: true,
        defaultValue: 25565,
        placeholder: "25565",
        tooltip: "The port of your Minecraft server",
      },
    ],
  },
  {
    key: "features",
    label: "Features",
    path: "/features",
    fields: [
      {
        key: "adminPanel",
        label: "Admin Panel",
        type: "boolean",
        required: false,
        defaultValue: "",
        placeholder: "",
        tooltip:
          "This adds an Admin Panel for you or your Admins to use. !You will also need to fill in the credentials section for this to work properly!",
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
        tooltip: "Type of your website",
      },
      {
        key: "fontSize",
        label: "Font Size",
        type: "number",
        required: false,
        defaultValue: 14,
        placeholder: "14",
        tooltip: "Default fontsize for your website",
      },
    ],
  },
];
