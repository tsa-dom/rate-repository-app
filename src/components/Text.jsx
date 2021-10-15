import React from 'react'
import { Platform, Text as NativeText, StyleSheet } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: Platform.OS === 'android' ? theme.fonts.android : (Platform.OS === 'ios' ? theme.fonts.ios : theme.fonts.main),
    fontWeight: theme.fontWeights.normal,
  },
  textHeader: {
    color: theme.colors.white,
    margin: 15
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  submitButton: {
    backgroundColor: theme.colors.blue,
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    padding: 18,
    textAlign: 'center'
  }
})

const Text = ({ color, fontWeight, submitButton, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'header' && styles.textHeader,
    fontWeight === 'bold' && styles.fontWeightBold,
    submitButton && styles.submitButton,
    style,
  ]

  return <NativeText style={textStyle} {...props} />
}

export default Text