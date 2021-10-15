import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  columnItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const StatisticBar = ({ stars, forks, reviews, rating }) => {
  const parseNumber = number => number > 999 ? `${Math.round(Number(number) / 100) / 10}k` : number

  return (
    <View style={styles.container}>
      <View style={styles.columnItem}>
        <Text fontWeight='bold' >{parseNumber(stars)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.columnItem}>
        <Text fontWeight='bold' >{parseNumber(forks)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.columnItem}>
        <Text fontWeight='bold' >{parseNumber(reviews)}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.columnItem}>
        <Text fontWeight='bold' >{parseNumber(rating)}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  )
}

export default StatisticBar