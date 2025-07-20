export type ConfigField = {
  key: string;
  label: string;
  type: "text" | "number" | "boolean";
  required: boolean;
  defaultValue?: string | number;
  placeholder?: string;
};
