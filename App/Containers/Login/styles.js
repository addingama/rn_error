import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Themes'

const logoWidth = Metrics.screenWidth * 0.9
const logoHeight = logoWidth / 3.79
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    marginVertical: 50
  },

  logo: {
    width: logoWidth,
    height: logoHeight,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  marketing: {
    color: Colors.accent,
    fontSize: 18,
    fontFamily: Fonts.type.emphasis,
    textAlign: 'right',
    marginHorizontal: Metrics.screenWidth * 0.05
  },
  formContainer: {
    padding: Metrics.doubleBaseMargin
  }
})

export default styles
