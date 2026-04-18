// Импортируем функцию strapiGet для выполнения GET-запросов к Strapi API
import { strapiGet, normalizeSingle } from './strapi'

// Объявляем асинхронную функцию для получения данных страницы "Контакты"
export async function getContactsPage() {
  const res = await strapiGet('/api/contacts-page', { populate: '*' })
  // преобразуем ответ Strapi
  return normalizeSingle(res)
}
