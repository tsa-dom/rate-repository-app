import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_USER } from '../qraphql/queries'

const useUser = () => {
  const [user, setUser] = useState()
  const { data } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
  })
  useEffect(() => {
    if (data && data.authorizedUser) setUser(data.authorizedUser.username)
    else setUser(undefined)
  }, [data])

  return user
}

export default useUser