import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1
  },
  infoItem: {
    padding: 5,
  },
  blueBox: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 5,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 6
  }
})

const InfoBar = ({ fullName, description, language }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight='bold' style={styles.infoItem} >{fullName}</Text>
      <Text style={styles.infoItem} >{description}</Text>
      <Text style={styles.blueBox}>{language}</Text>
    </View>
  )
}

export default InfoBar