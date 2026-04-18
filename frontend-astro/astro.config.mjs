import { defineConfig } from 'astro/config' // Функция для создания конфигурации Astro
import node from '@astrojs/node'
import { fileURLToPath } from 'url'

export default defineConfig({
  // Страницы генерируются на сервере при каждом запросе
  output: 'server',
  adapter: node({ mode: 'standalone' }),

  // Настройки Vite (сборщик, который использует Astro)
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
})
