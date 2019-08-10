import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import Touchable from 'react-native-platform-touchable'
import { Colors } from '@Themes'

const IconButton = ({ onPress, name, type, color, size }) => (
  <Touchable onPress={onPress}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10}}>
      <Icon name={name} type={type} color={color} size={size} />
    </View>
  </Touchable>

)

IconButton.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.oneOf([PropTypes.string, PropTypes.number])
}

IconButton.defaultProps = {
  color: Colors.primary,
  size: 30
}

export default IconButton
