import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../qraphql/queries'

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER)

  const createUser = async ({ username, password }) => {
    const result = await mutate({
      variables: {
        username,
        password
      }
    })

    return result
  }

  return [createUser, result]
}

export default useSignUp