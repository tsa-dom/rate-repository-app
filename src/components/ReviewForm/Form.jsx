import React from 'react'
import { Pressable, View } from 'react-native'
import FormikTextInput from '../FormikTextInput'
import Text from '../Text'

const Form = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput
        name='ownerName'
        placeholder='Repository owner name'
      />
      <FormikTextInput
        name='repositoryName'
        placeholder='Repository name'
      />
      <FormikTextInput
        name='rating'
        placeholder='Rating between 0 and 100'
        type='numeric'
      />
      <FormikTextInput
        name='text'
        placeholder='Review'
        multiline
        numberOfLines={3}
      />
      <Pressable testID='submit' onPress={onSubmit}>
        <Text backgroundColor='blue' submitButton>Create a review</Text>
      </Pressable>
    </View>
  )
}

export default Form