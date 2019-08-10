import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    shadowOpacity: 0.1,
    elevation: 3
  },
  headerTitle: {
    fontFamily: Fonts.type.lightBase,
    color: Colors.headerTint
  },
  tab: {
    justifyContent: 'center'
    // backgroundColor: Colors.background
  },
  tabBackground: {
    backgroundColor: Colors.tabBackground,
    shadowOpacity: 0.3,
    elevation: 5
  },
  tabLabel: {
    // fontWeight: 'bold',
    fontFamily: Fonts.type.base,
    fontSize: 14,
    color: Colors.primary
  },
  tabIndicator: {
    height: 2,
    backgroundColor: Colors.primary
  }
})
