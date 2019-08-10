import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes'

//


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  }
})
class LaunchScreen extends Component {
  static navigationOptions = {
    header: null
  }
  componentWillReceiveProps (nextProps) {
    if (!this.props.success && nextProps.success) {
      if (nextProps.user) {
        this.openDrawer()
      } else {
        this.openSignin()
      }
    }
  }
  openSignin = () => {
    this.props.navigation.navigate('Login')
  }

  openDrawer = () => {
    this.props.navigation.navigate('main')
  }
  render () {
    return (
      <View style={styles.container} />
    )
  }
}

const mapStateToProps = ({ startup, auth }) => {
  return {
    success: startup.success,
    user: auth.user
  }
}

export default connect(mapStateToProps, null)(LaunchScreen)
