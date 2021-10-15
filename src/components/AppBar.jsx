import React from 'react'
import { View, StyleSheet, Pressable, ScrollView } from 'react-native'
import Text from './Text'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flexDirection: 'row'
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <Link to='/'>
            <Text fontWeight='bold' color='header'>Repositories</Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link to='/signin'>
            <Text fontWeight='bold' color='header'>Sign in</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default AppBar