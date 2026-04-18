// Импортируем функцию strapiGet для выполнения GET-запросов к Strapi API
import { strapiGet, normalizeSingle } from './strapi'
// Объявляем асинхронную функцию getAttractionsPage для получения данных страницы "Аттракцион"
export async function getAttractionsPage() {
  // Выполняем GET-запрос к эндпоинту, который указывает Strapi полностью загрузить все связанные отношения и вложенные поля
  const res = await strapiGet('/api/attractions-page', { populate: '*' })
  // преобразуем ответ Strapi
  return normalizeSingle(res)
}
