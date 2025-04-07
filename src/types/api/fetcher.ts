export type FetcherOptions = {
  headers?: Record<string, string>
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  body?: Record<string, unknown>
}

export type ApiError = {
  status: number
  message: string
  data?: unknown
}
