import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, KeyboardAvoidingView, Image, Alert } from 'react-native'
import {Icon} from 'react-native-elements'
import _ from 'lodash'
import { NavigationActions } from 'react-navigation'

// redux
import AuthActions from '../../Redux/AuthRedux'

// components
import {Input, Text, Button} from '../../Components/Atom'

// styles
import { Images, Colors } from '../../Themes'
import styles from './styles'

const defaultForm = {
  username: '',
  password: ''
}
class Login extends Component {
  static navigationOptions = {
    header: null
  }
  constructor (props) {
    super(props)
    this.state = {
      showPassword: false,
      form: defaultForm
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.posting && !nextProps.posting && !nextProps.error) {
      this.openDrawer()
    }
  }
  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  changeForm = (field, value) => {
    let form = _.cloneDeep(this.state.form)
    form[field] = value
    this.setState({ form })
  }

  isValid = () => {
    const { username, password } = this.state.form
    const valid = (username !== '' && password !== '')
    if (!valid) Alert.alert('Error', 'Please input all fields')
    return valid
  }

  login = () => {
    if (this.isValid()) {
      this.props.login(this.state.form)
    }
  }

  openDrawer = () => {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        key: null,
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'main',
            params: {}
          })
        ]
      })
    )
  }

  render () {
    const { showPassword, form } = this.state
    const { posting } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={Images.logo} style={styles.logo} />
          <Text style={styles.marketing}>Marketing</Text>
        </View>

        <KeyboardAvoidingView behavior='padding' style={styles.formContainer}>
          <Input placeholder='Email / Username'
            value={form.username}
            onChangeText={text => this.changeForm('username', text)}
            leftIcon={<Icon name='person-outline' color={Colors.primary} />}
            onSubmitEditing={() => this.passwordInput.focus()} returnKeyType='next' />
          <Input placeholder='Password'
            inputRef={c => this.passwordInput = c}
            secureTextEntry={!showPassword}
            value={form.password}
            onChangeText={text => this.changeForm('password', text)}
            leftIcon={<Icon name='lock' color={Colors.primary} />}
            rightIcon={<Icon name={showPassword ? 'eye-off' : 'eye'}
              onPress={this.togglePassword} type='material-community' color={Colors.steel} />} returnKeyType='done' />
          <Button
            title='Login'
            preset='accent'
            loading={posting}
            disabled={posting}
            onPress={this.login} />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    user: auth.user,
    posting: auth.posting,
    error: auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (form) => dispatch(AuthActions.loginRequest(form))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
