// Импортируем функцию strapiGet для выполнения GET-запросов к Strapi API
import { strapiGet, normalizeSingle } from './strapi'

// Объявляем асинхронную функцию для получения данных футера (подвала сайта)
export async function getFooter() {
  const res = await strapiGet('/api/footer', { populate: '*' })
  // преобразуем ответ Strapi
  return normalizeSingle(res)
}
