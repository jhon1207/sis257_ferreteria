import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  // Reglas específicas para archivos a analizar
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      '@typescript-eslint/no-explicit-any': 'error', // Prohíbe el uso de "any"
      '@typescript-eslint/no-unused-vars': [
        'error',

        {
          args: 'all', // Verifica todos los argumentos
          argsIgnorePattern: '^_', // Ignora argumentos que comienzan con "_"
          caughtErrors: 'all', // Verifica todos los errores atrapados
          caughtErrorsIgnorePattern: '^_', // Ignora errores atrapados que comienzan con "_"
          destructuredArrayIgnorePattern: '^_', // Ignora patrones desestructurados que comienzan con "_"
          varsIgnorePattern: '^_', // Ignora variables que comienzan con "_"
          ignoreRestSiblings: true, // Ignora propiedades restantes en desestructuración
        },
      ],
    },
  },
  // Configuración para ignorar archivos o carpetas
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'], // Directorios ignorados
  },
  // Configuraciones adicionales de Vue y TypeScript
  ...pluginVue.configs['flat/essential'], // Configuración esencial de Vue
  ...vueTsEslintConfig(), // Configuración de TypeScript para Vue
  skipFormatting, // Omitir reglas de formato para Prettier
]
