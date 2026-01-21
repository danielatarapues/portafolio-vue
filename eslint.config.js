import js from '@eslint/js';
import ts from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import configPrettier from 'eslint-config-prettier';

export default ts.config(
  // Configuración base de JavaScript
  js.configs.recommended,
  
  // Configuración de TypeScript
  ...ts.configs.recommended,
  
  // Configuración de Vue 3
  ...pluginVue.configs['flat/essential'], // 'flat/recommended' para reglas más estrictas
  
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },


  {
    rules: {
      'vue/multi-word-component-names': 'off', 
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
  },

  // Desactiva reglas que choquen con Prettier
  configPrettier,
  
  // Ignorar carpetas
  {
    ignores: ['dist/', 'node_modules/', 'public/'],
  }
);