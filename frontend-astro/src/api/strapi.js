// Получаем базовый URL Strapi API из переменных окружения
const STRAPI_URL = process.env.PUBLIC_STRAPI_URL || import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337'

// Получаем URL для браузерного доступа к медиафайлам 
const STRAPI_BROWSER_URL = process.env.PUBLIC_STRAPI_BROWSER_URL || STRAPI_URL


// Функция выполнения GET-запроса к Strapi API
export async function strapiGet(path, params = {}) {
    // Создаем новый URL-объект, объединяя базовый URL с путем
  const url = new URL(path, STRAPI_URL)
   // Перебираем все параметры запроса и добавляем их к URL
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value)
  })

  const response = await fetch(url.toString())

  // Если ответ не успешный, выбрасываем ошибку
  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`)
  }
  // Парсим и возвращаем ответ в формате JSON
  return response.json()
}

// Функция выполнения POST-запроса к Strapi API
export async function strapiPost(path, body) {
  const url = new URL(path, STRAPI_URL)

  // Выполняем fetch-запрос с методом POST
  const response = await fetch(url.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: body }),
  })

  // Если ответ не успешный, выбрасываем ошибку
  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`)
  }
  // Парсим и возвращаем ответ в формате JSON
  return response.json()
}

// Функция для получения полного URL медиафайла из Strapi
export function strapiMedia(media) {
  if (!media?.data?.attributes?.url) return ''
  const mediaUrl = media.data.attributes.url
  if (mediaUrl.startsWith('http')) return mediaUrl
  return `${STRAPI_BROWSER_URL}${mediaUrl}`
}

// Функция нормализации списка данных из ответа Strapi
export function normalizeCollection(response) {
  if (!response?.data) return []
  return response.data.map(item => ({
    id: item.id,
    ...item.attributes,
  }))
}

// Функция нормализации одиночного объекта данных из ответа Strapi
export function normalizeSingle(response) {
  if (!response?.data) return null
  return {
    id: response.data.id,
    ...response.data.attributes,
  }
}
