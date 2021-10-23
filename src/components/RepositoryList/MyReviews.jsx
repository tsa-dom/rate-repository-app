import React from 'react'
import { FlatList, View, StyleSheet, Pressable, Alert } from 'react-native'
import { useHistory } from 'react-router-native'
import useReview from '../../hooks/useReview'
import useUser from '../../hooks/useUser'
import Text from '../Text'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  buttonBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white'
  },
  button: {
    padding: 15,
    marginBottom: 20,
    borderRadius: 6,
    width: 180,
    textAlign: 'center'
  },
  deleteButton: {
    backgroundColor: '#ff6b6b',
    color: 'white',
    fontWeight: 'bold'
  },
  viewButton: {
    backgroundColor: '#0366d6',
    color: 'white',
    fontWeight: 'bold'
  }
})

const OptionBar = ({ review }) => {
  const history = useHistory()
  const [, , deleteReview] = useReview()
  const handleView = () => {
    history.push(`/${review.repositoryId}`)
  }

  const handleDelete = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await deleteReview({
              id: review.id
            })
            history.push('/myreviews')
          }
        }
      ]
    )
  }

  return (
    <View style={styles.buttonBar}>
      <Pressable onPress={handleView}>
        <Text style={[styles.button, styles.viewButton]}>
          View repository
        </Text>
      </Pressable>
      <Pressable onPress={handleDelete}>
        <Text style={[styles.button, styles.deleteButton]}>
          Delete review
        </Text>
      </Pressable>
    </View>
  )
}

const MyReviews = () => {
  const user = useUser({
    includeReviews: true
  })

  if (!user) return <></>
  const reviews = user.authorizedUser.reviews.edges
    .map(edge => edge.node)
    .map(node => {
      return {
        ...node,
        user: {
          username: node.repository.fullName
        }
      }
    })

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => {
        return (
          <>
            <ReviewItem review={item} />
            <OptionBar review={item} />
          </>
        )
      }}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  )
}

export default MyReviews