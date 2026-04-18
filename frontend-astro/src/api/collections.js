// Импортируем функцию strapiGet для GET-запросов к Strapi API
import { strapiGet, normalizeCollection } from './strapi'

// Объявляем асинхронную функцию для получения списка часто задаваемых вопросов (FAQ)
export async function getFaqs() {
  const res = await strapiGet('/api/faqs', { sort: 'order:asc', populate: '*' })
  return normalizeCollection(res)
}

// Объявляем асинхронную функцию для получения списка участников команды
export async function getTeamMembers() {
  const res = await strapiGet('/api/team-members', { sort: 'order:asc', populate: '*' })
  return normalizeCollection(res)
}
// Объявляем асинхронную функцию для получения списка отзывов
export async function getReviews() {
  const res = await strapiGet('/api/reviews', { sort: 'order:asc', populate: '*' })
  return normalizeCollection(res)
}

// Объявляем асинхронную функцию для получения списка карточек с преимуществами
export async function getAdvantageCards() {
  const res = await strapiGet('/api/advantage-cards', { sort: 'order:asc', populate: '*' })
  return normalizeCollection(res)
}

// Объявляем асинхронную функцию для получения списка карточек с ценами 
export async function getPricingCards() {
  const res = await strapiGet('/api/pricing-cards', { sort: 'order:asc', populate: '*' })
  return normalizeCollection(res)
}
