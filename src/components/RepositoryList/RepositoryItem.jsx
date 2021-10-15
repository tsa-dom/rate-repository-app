import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import InfoBar from './InfoBar'
import StatisticBar from './StatisticsBar'

const styles = StyleSheet.create({
  item: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white'
  },
  logo: {
    margin: 15,
    borderRadius: 3,
    width: 50,
    height: 50
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
})

const RepositoryItem = ({ item }) => {
  const { fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage, ownerAvatarUrl } = item
  return (
    <View style={styles.item}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={{ uri: ownerAvatarUrl }}
        />
        <InfoBar fullName={fullName} description={description} language={language} />
      </View>
      <StatisticBar
        stars={stargazersCount}
        forks={forksCount}
        reviews={reviewCount}
        rating={ratingAverage}
      />
    </View>
  )
}

export default RepositoryItem