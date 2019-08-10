import React from 'react'
import PropTypes from 'prop-types'
import { Button as RNEButton, ButtonProps } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '@Themes'

export const PRESETS = {
  primary: 'primary',
  darkPrimary: 'darkPrimary',
  secondary: 'secondary',
  accent: 'accent'
}
const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: Fonts.type.base,
    paddingVertical: 10
  },
  buttonRound: {
    borderRadius: 50
  },
  buttonStyle: {
    marginBottom: Metrics.baseMargin,
    borderRadius: 0
  },
  loading: {
    padding: 10
  },
  primary: {
    backgroundColor: Colors.buttonPrimary
  },
  secondary: {
    backgroundColor: Colors.buttonSecondary
  },
  darkPrimary: {
    backgroundColor: Colors.darkPrimary
  },
  accent: {
    backgroundColor: Colors.accent
  }
})

const Button = ({preset, rounded, titleStyle, buttonStyle, ...rest}) => {
  let buttonStyles = [styles.buttonStyle, buttonStyle]
  if (rounded) {
    buttonStyles.push(styles.buttonRound)
  }
  switch (preset) {
    case PRESETS.primary:
      buttonStyles.push(styles.primary)
      break
    case PRESETS.secondary:
      buttonStyles.push(styles.secondary)
      break
    case PRESETS.darkPrimary:
      buttonStyles.push(styles.darkPrimary)
      break
    case PRESETS.accent:
      buttonStyles.push(styles.accent)
      break
  }
  return (
    <RNEButton
      titleStyle={[styles.titleStyle, titleStyle]}
      buttonStyle={buttonStyles}
      loadingStyle={styles.loading}
      {...rest} />
  )
}

Button.propTypes = {
  preset: PropTypes.oneOf([PRESETS.primary, PRESETS.secondary, PRESETS.darkPrimary, PRESETS.accent]),
  ...ButtonProps
}

export default Button
