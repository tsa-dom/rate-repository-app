import React from 'react'
import { Pressable, View } from 'react-native'
import FormikTextInput from '../FormikTextInput'
import Text from '../Text'

const Form = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput
        name='username'
        placeholder='Username'
      />
      <FormikTextInput
        name='password'
        placeholder='Password'
        secureTextEntry
      />
      <FormikTextInput
        name='confirmation'
        placeholder='Passwod confirmation'
        secureTextEntry
      />
      <Pressable testID='submit' onPress={onSubmit}>
        <Text backgroundColor='blue' submitButton>Sign up</Text>
      </Pressable>
    </View>
  )
}

export default Form