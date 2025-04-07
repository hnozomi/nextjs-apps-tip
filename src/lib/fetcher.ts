import type { ApiError, FetcherOptions } from '@/types/api'

export const fetcher = async <T>(
  url: string,
  options: FetcherOptions = {}
): Promise<T> => {
  const { headers = {}, method = 'GET', body } = options

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    credentials: 'include'
  }

  if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    fetchOptions.body = JSON.stringify(body)
  }

  const response = await fetch(url, fetchOptions)

  // レスポンスが空の場合は空のオブジェクトを返す
  if (response.status === 204) {
    return {} as T
  }

  const data = await response.json()

  if (!response.ok) {
    const error: ApiError = {
      status: response.status,
      message: data.message || response.statusText,
      data
    }
    throw error
  }

  return data as T
}
