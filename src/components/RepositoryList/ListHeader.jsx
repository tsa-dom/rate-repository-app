import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Searchbar } from 'react-native-paper'

const styles = StyleSheet.create({
  picker: {
    padding: 30,
    marginLeft: 15
  },
  search: {
    margin: 10,
    padding: 5
  }
})

const ListHeader = ({
  sortValue,
  setSortValue,
  searchValue,
  setSearchValue
}) => {

  return (
    <View>
      <Searchbar
        style={styles.search}
        placeholder="Search"
        onChangeText={query => setSearchValue(query)}
        value={searchValue}
      />
      <Picker
        style={styles.picker}
        selectedValue={sortValue}
        onValueChange={(itemValue) => setSortValue(itemValue)}
      >
        <Picker.Item label='Latest repositories' value='latest' />
        <Picker.Item label='Highest rated repositories' value='highestRate' />
        <Picker.Item label='Lowest rated repositories' value='lowestRate' />
      </Picker>
    </View>
  )
}

export default ListHeader