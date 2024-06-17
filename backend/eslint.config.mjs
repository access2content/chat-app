import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import { node } from "eslint-plugin-env";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: [...globals.browser, ...node] } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
