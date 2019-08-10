import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import DrawerContent from '../Containers/Drawer'

import Login from '../Containers/Login'

import { Colors } from '@Themes'
const DrawerStack = createDrawerNavigator({
  TempScreen: { screen: Login }
}, {
  drawerWidth: 300,
  contentComponent: (props) => {
    return (
      <DrawerContent {...props} />
    )
  }
})

// Manifest of possible screens
const PrimaryNav = createSwitchNavigator({
  LaunchScreen: { screen: LaunchScreen },
  Login: { screen: Login },
  main: {screen: DrawerStack}
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'LaunchScreen',
  navigationOptions:
  {
    headerBackTitle: '',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: Colors.headerTint
  }
})

export default createAppContainer(PrimaryNav)
