import { useMutation } from '@apollo/client'
import { SIGN_IN } from '../qraphql/queries'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const [mutate, result] = useMutation(SIGN_IN)

  const signIn = async ({ username, password }) => {
    const result = await mutate({
      variables: {
        username,
        password
      },
    })
    await authStorage.setAccessToken(result.data.authorize.accessToken)

    return result
  }

  return [signIn, result]
}

export default useSignIn