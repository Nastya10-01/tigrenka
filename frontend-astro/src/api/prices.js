// Импортируем функцию strapiGet для выполнения GET-запросов к Strapi API
import { strapiGet, normalizeSingle } from './strapi'

// Объявляем асинхронную функцию для получения данных страницы с ценами
export async function getPricesPage() {
  const res = await strapiGet('/api/prices-page', { populate: '*' })
  // преобразуем ответ Strapi
  return normalizeSingle(res)
}
