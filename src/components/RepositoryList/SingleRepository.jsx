import React from 'react'
import { FlatList } from 'react-native'
import { useParams } from 'react-router-native'
import useRepository from '../../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import ReviewItem from './ReviewItem'

const SingleRepository = () => {
  const { repository } = useParams()
  const variables = {
    id: repository,
    first: 8
  }
  const { repo, reviews, fetchMore } = useRepository(variables)

  if (!repo || !reviews) return <></>

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repo} toRepository />}
      onEndReached={fetchMore}
    />
  )
}

export default SingleRepository