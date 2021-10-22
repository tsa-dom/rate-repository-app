import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_USER } from '../qraphql/queries'

const useUser = (variables) => {
  const [user, setUser] = useState(null)
  const { data } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
    variables
  })

  useEffect(() => {
    if (data && data.authorizedUser) setUser(data.authorizedUser.username)
    else setUser(null)
  }, [data])

  return variables?.includeReviews ? data : user
}

export default useUser