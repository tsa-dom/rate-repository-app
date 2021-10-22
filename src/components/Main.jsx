import React from 'react'
import { StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Switch, Route, Redirect } from 'react-router-native'
import SignIn from './SignIn'
import SingleRepository from './RepositoryList/SingleRepository'
import ReviewForm from './ReviewForm'
import SignUp from './SignUp'
import MyReviews from './RepositoryList/MyReviews'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  },
})

const Main = () => {

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/review" exact>
          <ReviewForm />
        </Route>
        <Route path="/myreviews" exact>
          <MyReviews />
        </Route>
        <Route path="/:repository">
          <View>
            <SingleRepository />
          </View>
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  )
}

export default Main