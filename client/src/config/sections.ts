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
        required: true,
      },
      {
        key: "version",
        label: "Version",
        type: "text",
        required: true,
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
      },
      {
        key: "fontSize",
        label: "Font Size",
        type: "number",
        required: false,
      },
    ],
  },
];
