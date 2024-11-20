import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'error', // Regla para evitar el uso de "any"
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all', // Verifica todos los argumentos
          argsIgnorePattern: '^_', // Ignora argumentos que empiezan con "_"
          caughtErrors: 'all', // Verifica todos los errores atrapados
          caughtErrorsIgnorePattern: '^_', // Ignora errores atrapados que empiezan con "_"
          destructuredArrayIgnorePattern: '^_', // Ignora patrones de arreglos desestructurados que empiezan con "_"
          varsIgnorePattern: '^_', // Ignora variables que empiezan con "_"
          ignoreRestSiblings: true, // Ignora las propiedades restantes en desestructuración
        },
      ],
    },
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'], // Directorios a ignorar
  },
  ...pluginVue.configs['flat/essential'], // Configuración esencial de Vue
  ...vueTsEslintConfig(), // Configuración de TypeScript para Vue
  skipFormatting, // Configuración para omitir reglas de formato
]
