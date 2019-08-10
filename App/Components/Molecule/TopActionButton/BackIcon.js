import React from 'react'
import { Colors } from '@Themes'
import { NavigationActions } from 'react-navigation'
import IconButton from './IconButton'

const BackIcon = ({ navigation }) => (
  <IconButton
    name='arrow-back'
    color={Colors.headerTint}
    size={20}
    onPress={() => navigation.dispatch(NavigationActions.back())} />
)

export default BackIcon
