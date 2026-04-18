// Импортируем функцию strapiGet для выполнения GET-запросов к Strapi API
import { strapiGet, normalizeSingle } from './strapi'

// Объявляем асинхронную функцию для получения данных главной страницы 
export async function getHomePage() {
  const res = await strapiGet('/api/home-page', { populate: '*' })
  // преобразуем ответ Strapi
  return normalizeSingle(res)
}
