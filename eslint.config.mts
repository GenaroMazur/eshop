import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

export default [
    {files: ["**/*.{js,mjs,cjs,ts}"]},
    {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
    {languageOptions: {globals: globals.node}},
    {
        rules: {
            eqeqeq: "off",
            "no-unused-vars": "error",
            "prefer-const": ["error", {ignoreReadBeforeAssign: true}],
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginPrettierRecommended
];