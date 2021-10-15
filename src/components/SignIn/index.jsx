import { Formik } from 'formik'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Form from './Form'
import * as yup from 'yup'

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

  const onSubmit = (values) => {
    console.log(values)
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