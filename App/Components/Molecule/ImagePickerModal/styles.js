import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-around'},
  title: {textAlign: 'center'},
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  itemWrapper: {alignItems: 'center', justifyContent: 'center'},
  image: {width: 50, height: 50, resizeMode: 'contain', marginBottom: 10}
})

export default styles
