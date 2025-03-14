import {QueryClient} from '@tanstack/react-query'

// One place to set the defaults for all query clients created in loaders
export const createQueryClientForServer = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // https://tanstack.com/query/latest/docs/framework/react/guides/ssr#high-memory-consumption-on-server
        gcTime: 2 * 1000,
      },
    },
  })
}
