import useAuthStorage from './useAuthStorage'
import { useApolloClient } from '@apollo/client'
import useUser from './useUser'

const useSignOut = () => {
  const authStorage = useAuthStorage()
  const client = useApolloClient()
  const { refetch } = useUser()

  const signOut = async () => {
    await authStorage.removeAccessToken()
    client.resetStore()
    refetch()
  }

  return [signOut]
}

export default useSignOut