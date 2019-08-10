import React from 'react'
import { StatusBar as RNStatusBar, Platform } from 'react-native'
import { Colors } from '@Themes'

const StatusBar = () => (
  <RNStatusBar backgroundColor={Colors.statusBar} barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />
)

export default StatusBar
