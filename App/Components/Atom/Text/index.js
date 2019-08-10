import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Fonts } from '@Themes'

const styles = StyleSheet.create({
  small: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small
  },
  smallItalic: {
    fontFamily: Fonts.type.emphasis,
    fontSize: Fonts.size.small
  },
  medium: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium
  },
  mediumItalic: {
    fontFamily: Fonts.type.emphasis,
    fontSize: Fonts.size.medium
  },
  large: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.input
  },
  smallBold: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.small
  },
  mediumBold: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium
  },
  largeBold: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.input
  }

})

export const Preset = {
  small: 'small',
  smallItalic: 'smallItalic',
  medium: 'medium',
  large: 'large',
  smallBold: 'smallBold',
  mediumBold: 'mediumBold',
  mediumItalic: 'mediumItalic',
  largeBold: 'largeBold'

}

const generateStyle = (preset, style) => {
  switch (preset) {
    case Preset.small:
      return [styles.small, style]
    case Preset.smallItalic:
      return [styles.smallItalic, style]
    case Preset.medium:
      return [styles.medium, style]
    case Preset.mediumItalic:
      return [styles.mediumItalic, style]
    case Preset.large:
      return [styles.large, style]
    case Preset.smallBold:
      return [styles.smallBold, style]
    case Preset.mediumBold:
      return [styles.mediumBold, style]
    case Preset.largeBold:
      return [styles.largeBold, style]

    default:
      return [styles.medium, style]
  }
}

const Text = ({children, preset, style, ...rest}) => {
  return (
    <RNText {...rest} style={generateStyle(preset, style)} >{children}</RNText>
  )
}

Text.propTypes = {
  preset: PropTypes.oneOf(...Preset)
}

export default Text
