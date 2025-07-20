export type ConfigField = {
  key: string;
  label: string;
  type: "text" | "number" | "boolean";
  required: boolean;
  placeholder?: string;
  tooltip: string;
};
