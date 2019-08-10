import React from 'react'
import { StyleSheet } from 'react-native'
import { CheckBox as RNECheckBox } from 'react-native-elements'
import { Fonts, Colors } from '@Themes'

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.type.base,
    fontSize: 14
  }
})
const CheckBox = ({ titleStyle, ...rest }) => (
  <RNECheckBox checkedColor={Colors.primary} titleStyle={[styles.title, titleStyle]} {...rest} />
)

export default CheckBox
