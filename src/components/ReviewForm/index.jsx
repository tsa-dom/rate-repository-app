import React from 'react'
import { View, StyleSheet } from 'react-native'
import * as yup from 'yup'
import { Formik } from 'formik'
import Form from './Form'
import useReview from '../../hooks/useReview'
import { useHistory } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12
  },
})

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
}

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Min value 0')
    .max(100, 'Max value 100')
    .required('Rating is required')
})

const ReviewForm = () => {
  const history = useHistory()
  const [createReview] = useReview()

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values
    try {
      const { data } = await createReview({ ownerName, repositoryName, rating: Number(rating), text })
      history.push(`/${data.createReview.repositoryId}`)
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

export default ReviewForm