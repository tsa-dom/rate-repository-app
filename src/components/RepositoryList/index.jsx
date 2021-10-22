import React, { useState } from 'react'
import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useHistory } from 'react-router-native'
import useRepositories from '../../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'
import ListHeader from './ListHeader'
import { useDebounce } from 'use-debounce'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props
    const { sortValue, setSortValue, searchValue, setSearchValue } = props

    return (
      <ListHeader
        sortValue={sortValue}
        setSortValue={setSortValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    )
  }

  render() {
    const repositoryNodes = this.props.repositories
    const handlePress = (id) => {
      this.props.history.push(`/${id}`)
    }

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        onEndReached={this.props.onEndReach}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item.id)}>
            <RepositoryItem testID={item.id} item={item} />
          </Pressable>
        )}
      />
    )
  }
}

const RepositoryList = () => {
  const [sortValue, setSortValue] = useState('latest')
  const [searchValue, setSearchValue] = useState('')
  const [debounceSearch] = useDebounce(searchValue, 500)
  const variables = {
    orderBy: (sortValue === 'highestRate' || sortValue === 'lowestRate') ? 'RATING_AVERAGE' : 'CREATED_AT',
    orderDirection: sortValue === 'lowestRate' ? 'ASC' : 'DESC',
    searchKeyword: debounceSearch,
    first: 8
  }
  const { repositories, fetchMore } = useRepositories(variables)
  const onEndReach = () => {
    fetchMore()
  }
  const history = useHistory()

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortValue={sortValue}
      searchValue={searchValue}
      setSortValue={setSortValue}
      setSearchValue={setSearchValue}
      onEndReach={onEndReach}
      history={history}
    />
  )
}

export default RepositoryList