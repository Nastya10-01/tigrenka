// Импортируем функцию strapiPost для выполнения POST-запросов к Strapi API
import { strapiPost } from './strapi'

// Объявляем асинхронную функцию для отправки данных контактной формы
export async function submitContactForm({ name, phone, message }) {
    // Передаем данные формы (имя, телефон, сообщение) в теле запроса
  return strapiPost('/api/contact-submissions', { name, phone, message })
}
