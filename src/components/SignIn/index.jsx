import { Formik } from 'formik'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Form from './Form'
import * as yup from 'yup'
import useSignIn from '../../hooks/useSignIn'
import { useApolloClient } from '@apollo/client'
import { useHistory } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12
  },
})

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
})

const SignIn = () => {
  const [signIn] = useSignIn()
  const client = useApolloClient()
  const history = useHistory()

  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      await signIn({ username, password })
      client.resetStore()
      history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

export default SignIn