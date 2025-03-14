import {createQueryClientForServer} from '@common/queries/query-client'
import {apiRequest} from '@common/util/api-request'
import type {User} from '@shared/types/user'
import {dehydrate, queryOptions, useQuery} from '@tanstack/react-query'
import type {QueryClient as QueryClientType} from '@tanstack/react-query'

export const getUserQueryOptions = () => {
  return queryOptions<User[]>({
    queryKey: ['users-list'],
    queryFn: () => apiRequest('/users'),
  })
}

export const fetchUserData = async () => {
  const queryClient = createQueryClientForServer()
  const data = await queryClient.ensureQueryData(getUserQueryOptions())
  return {data, queryClient}
}

export const dehydrateUserState = (queryClient: QueryClientType) => {
  return dehydrate(queryClient)
}

export const useUserQuery = () => {
  return useQuery(getUserQueryOptions())
}
