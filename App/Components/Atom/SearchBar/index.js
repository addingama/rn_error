import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import { Colors, Fonts } from '../../../Themes'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    backgroundColor: Colors.snow
  },
  textInput: {
    fontFamily: Fonts.type.base,
    paddingHorizontal: 10,
    fontSize: Fonts.size.input,
    flex: 1
  }
})

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: props.value || ''
    }
  }

  changeText = (keyword) => {
    this.setState({ keyword })
    this.props.onChangeText(keyword)
  }

  clearText = () => {
    this.setState({ keyword: '' })
    this.search_input.clear()
    this.props.onChangeText('')
  }

  render () {
    const {onChangeText, ...rest} = this.props
    return (
      <View style={styles.container}>
        <Icon name='search' color={Colors.coal} />
        <TextInput
          ref={c => this.search_input = c}
          underlineColorAndroid='transparent'
          style={styles.textInput}
          placeholder='Search'
          autoCapitalize='none'
          autoCorrect={false}
          returnKeyType={'search'}
          onChangeText={this.changeText}
          value={this.state.keyword}
          autoFocus={false}
          {...rest} />
        {this.state.keyword !== '' && <Icon name='x-circle' type='feather' color={Colors.coal} onPress={this.clearText} />}
      </View>
    )
  }
}

export default SearchBar
