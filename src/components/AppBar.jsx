import React from 'react'
import { View, StyleSheet, Pressable, ScrollView } from 'react-native'
import Text from './Text'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'
import useSignOut from '../hooks/useSignOut'
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
        {user &&
          <Pressable>
            <Link to='/review'>
              <Text fontWeight='bold' color='header'>Create a review</Text>
            </Link>
          </Pressable>
        }
        {user &&
          <Pressable>
            <Link to='/myreviews'>
              <Text fontWeight='bold' color='header'>My reviews</Text>
            </Link>
          </Pressable>
        }
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
        {!user &&
          <Pressable>
            <Link to='/signup'>
              <Text fontWeight='bold' color='header'>Sign up</Text>
            </Link>
          </Pressable>
        }
      </ScrollView>
    </View>
  )
}

export default AppBar