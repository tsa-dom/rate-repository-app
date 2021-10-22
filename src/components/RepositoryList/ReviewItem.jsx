import { format } from 'date-fns'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ratingBorder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#0366d6',
    borderWidth: 2,
  },
  rating: {
    textAlign: 'center',
    marginTop: 12,
    color: '#0366d6',
    fontWeight: 'bold'
  },
  infoContainer: {
    flexDirection: 'column',
    paddingLeft: 20,
    paddingTop: 5,
    alignItems: 'flex-start',
    flex: 1
  },
  date: {
    color: 'grey',
    paddingBottom: 5
  }
})

const ReviewItem = ({ review }) => {
  const { rating, user, text, createdAt } = review

  return (
    <View style={styles.item}>
      <View style={styles.ratingBorder}>
        <Text style={styles.rating} >{rating}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text fontWeight='bold'>{user.username}</Text>
        <Text style={styles.date} >{format(new Date(createdAt), 'dd.MM.yyyy')}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem