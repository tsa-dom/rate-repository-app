import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { GET_REPOSITORIES } from '../qraphql/queries'

const useRepositories = () => {
  const [repositories, setRepositories] = useState()
  useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    onCompleted: result => setRepositories(result.repositories.edges.map(edge => edge.node))
  })

  return { repositories }
}

export default useRepositories