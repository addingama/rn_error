import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem as RNEListItem } from 'react-native-elements'
import { Fonts } from '@Themes'

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.type.base,
    fontSize: 14
  },
  subtitle: {
    fontFamily: Fonts.type.lightBase,
    fontSize: 13,
    marginTop: 5
  }
})
const ListItem = ({ titleStyle, subtitleStyle, ...rest }) => (
  <RNEListItem titleStyle={[styles.title, titleStyle]} subtitleStyle={[styles.subtitle, subtitleStyle]} {...rest} />
)

export default ListItem
