import React from 'react'
import { View, StyleSheet } from 'react-native'
import * as yup from 'yup'
import { Formik } from 'formik'
import Form from './Form'
import useSignUp from '../../hooks/useSignUp'
import { useHistory } from 'react-router-native'
import useSignIn from '../../hooks/useSignIn'
import { useApolloClient } from '@apollo/client'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12
  },
})

const initialValues = {
  username: '',
  password: '',
  confirmation: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username minimum lenght is 1')
    .max(30, 'Username maximum length is 30')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password minimum lenght is 5')
    .max(50, 'Password maximum length is 50')
    .required('Password is required'),
  confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords don\'t match')
    .required('Password confirmation is required')
})

const SignUp = () => {
  const history = useHistory()
  const [signUp] = useSignUp()
  const [signIn] = useSignIn()
  const client = useApolloClient()


  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      await signUp({ username, password })
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

export default SignUp