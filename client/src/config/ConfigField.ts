export type ConfigField = {
  key: string;
  label: string;
  type: "text" | "number";
  required: boolean;
  defaultValue?: string | number;
  placeholder?: string;
};
