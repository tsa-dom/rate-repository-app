import React from 'react'
import { StyleSheet, View, Image, Pressable } from 'react-native'
import Text from '../Text'
import InfoBar from './InfoBar'
import StatisticBar from './StatisticsBar'
import * as Linking from 'expo-linking'

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

const RepositoryItem = ({ item, toRepository }) => {
  const {
    url,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl
  } = item

  const handleToGitHub = () => {
    Linking.openURL(url)
  }

  return (
    <View style={styles.item}>
      <View style={styles.headerContainer}>
        <Image
          testID='avatarUrl'
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
      {toRepository &&
        <Pressable style={{ padding: 15 }} onPress={handleToGitHub}>
          <Text submitButton>Open in GitHub</Text>
        </Pressable>
      }
    </View>
  )
}

export default RepositoryItem