import useSWR, { SWRConfiguration, SWRResponse } from 'swr'
import { fetcher } from '@/lib/fetcher'
import type { FetcherOptions, ApiError } from '@/types/api'

type UseApiResponse<T> = SWRResponse<T, ApiError> & {
  isLoading: boolean
}

export const useApi = <T>(
  url: string | null,
  options: FetcherOptions = {},
  swrOptions: SWRConfiguration = {}
): UseApiResponse<T> => {
  const {
    data,
    error,
    isValidating,
    mutate
  } = useSWR<T, ApiError>(
    url,
    url ? () => fetcher<T>(url, options) : null,
    {
      revalidateOnFocus: false,
      ...swrOptions
    }
  )

  return {
    data,
    error,
    isLoading: !error && !data && !!url,
    isValidating,
    mutate
  }
}
