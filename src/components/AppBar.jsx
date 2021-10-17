import React from 'react'
import { View, StyleSheet, Pressable, ScrollView } from 'react-native'
import Text from './Text'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'
import useSignOut from '../hooks/useSignout'
import useUser from '../hooks/useUser'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flexDirection: 'row'
  }
})

const AppBar = () => {
  const user = useUser()
  const [signOut] = useSignOut()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <Link to='/'>
            <Text fontWeight='bold' color='header'>Repositories</Text>
          </Link>
        </Pressable>
        {!user &&
          <Pressable>
            <Link to='/signin'>
              <Text fontWeight='bold' color='header'>Sign in</Text>
            </Link>
          </Pressable>
        }
        {user &&
          <Pressable >
            <Link onPress={handleSignOut}>
              <Text fontWeight='bold' color='header'>Sign out</Text>
            </Link>
          </Pressable>
        }
      </ScrollView>
    </View>
  )
}

export default AppBar