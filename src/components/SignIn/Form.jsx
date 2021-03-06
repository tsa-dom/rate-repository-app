import React from 'react'
import { Pressable, View } from 'react-native'
import FormikTextInput from '../FormikTextInput'
import Text from '../Text'

const Form = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput
        testID='username'
        name='username'
        placeholder='Username'
      />
      <FormikTextInput
        testID='password'
        name='password'
        placeholder='Password'
        secureTextEntry
      />
      <Pressable testID='submit' onPress={onSubmit}>
        <Text backgroundColor='blue' submitButton>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default Form