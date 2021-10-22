import React from 'react'
import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'

const styles = StyleSheet.create({
  errorText: {
    marginTop: -5,
    marginBottom: 12,
    color: '#d73a4a'
  },
  text: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12
  },
  borderRed: {
    borderColor: '#d73a4a'
  }
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        testID={props.testID}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={[styles.text].concat(showError ? styles.borderRed : null)}
        {...props}
        keyboardType={props.type ? props.type : null}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput