import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { GET_REPOSITORIES } from '../qraphql/queries'

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState()

  const { data, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
    onCompleted: result => setRepositories(result.repositories.edges.map(edge => edge.node))
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    repositories,
    fetchMore: handleFetchMore,
    loading
  }
}

export default useRepositories