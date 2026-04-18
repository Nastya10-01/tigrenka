// Импортируем функцию strapiGet для выполнения GET-запросов к Strapi API
import { strapiGet, normalizeSingle } from './strapi'

// Объявляем асинхронную функцию для получения данных секции с картой
export async function getMapSection() {
  const res = await strapiGet('/api/map-section', { populate: '*' })
  // преобразуем ответ Strapi
  return normalizeSingle(res)
}
