import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { GET_REPOSITORY, GET_REVIEWS } from '../qraphql/queries'

const useRepository = (variables) => {
  const [reviews, setReviews] = useState()
  const [repo, setRepo] = useState()

  useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id: variables.id
    },
    onCompleted: result => setRepo(result.repository)
  })

  const reviewData = useQuery(GET_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables,
    onCompleted: result => setReviews(result.repository.reviews.edges.map(item => item.node))
  })

  const handleFetchMore = () => {
    const { loading, data, fetchMore } = reviewData
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables
      },
    })
  }

  return {
    repo,
    reviews,
    fetchMore: handleFetchMore,
  }
}

export default useRepository