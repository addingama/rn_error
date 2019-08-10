import React from 'react'
import { Colors } from '@Themes'
import IconButton from './IconButton'

const CloseIcon = ({ navigation }) => (
  <IconButton
    name='close'
    color={Colors.headerTint}
    size={20}
    onPress={() => navigation.goBack()} />
)

export default CloseIcon
