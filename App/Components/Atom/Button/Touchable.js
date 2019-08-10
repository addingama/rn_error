import Touchable from 'react-native-platform-touchable'
import withPreventDoubleClick from './withPreventDoubleClick'

export default withPreventDoubleClick(Touchable, 1000)
