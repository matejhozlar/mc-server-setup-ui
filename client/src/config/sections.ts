export const configSections = [
  {
    key: "general",
    label: "General",
    path: "/general",
    fields: [
      {
        key: "appName",
        label: "App Name",
        type: "text",
      },
      {
        key: "version",
        label: "Version",
        type: "text",
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
      },
      {
        key: "fontSize",
        label: "Font Size",
        type: "number",
      },
    ],
  },
];
