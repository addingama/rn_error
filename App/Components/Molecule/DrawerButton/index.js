import React, { Component } from 'react'
import Touchable from 'react-native-platform-touchable'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-elements'
import { Colors, Metrics } from '@Themes'

class DrawerButton extends Component {
  toggleDrawer = () => {
    this.props.navigation.navigate('DrawerToggle')
  }
  render () {
    return (
      <Touchable onPress={this.toggleDrawer} style={{paddingHorizontal: Metrics.baseMargin}}>
        <Icon name='menu' color={Colors.headerTint} />
      </Touchable>
    )
  }
}

DrawerButton.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default DrawerButton
