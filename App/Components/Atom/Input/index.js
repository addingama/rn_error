import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Input as RNEInput, InputProps } from 'react-native-elements'
import { Colors, Fonts } from '@Themes'
import Pallete from '@Themes/Pallete'

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    marginBottom: 16
  },
  inputStyle: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.input
  },
  labelStyle: {
    fontFamily: Fonts.type.base,
    fontSize: 14,
    color: Pallete.accent
  }
})

class Input extends PureComponent {
  state = {
    isFocus: false
  }
  render () {
    let containerStyle = [styles.containerStyle, this.props.containerStyle]
    if (this.state.isFocus) {
      containerStyle.push({ borderBottomColor: Colors.textInputUnderline, borderBottomWidth: 1 })
    }
    return (
      <RNEInput
        ref={this.props.inputRef}
        labelStyle={styles.labelStyle}
        autoCapitalize='none'
        autoCorrect={false}
        containerStyle={containerStyle}
        inputStyle={[styles.inputStyle, this.props.inputStyle, {textAlignVertical: 'top'}]}
        onFocus={() => this.setState({ isFocus: true })}
        onBlur={() => this.setState({ isFocus: false })}
        {...this.props} />
    )
  }
}

Input.propTypes = {
  ...InputProps,
  inputRef: PropTypes.func
}

export default Input
