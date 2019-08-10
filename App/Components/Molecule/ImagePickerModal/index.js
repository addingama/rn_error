import React from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'
import { Text, Touchable } from '@Atom'
import { Images } from '@Themes'
import styles from './styles'

const ImagePickerModal = ({onCameraPress, onGalleryPress, title}) => (
  <View style={styles.container}>
    <Text preset='largeBold' style={styles.title}>{title}</Text>
    <View style={styles.wrapper}>
      <Touchable onPress={onCameraPress}>
        <View style={styles.itemWrapper}>
          <Image source={Images.camera} style={styles.image} />
          <Text preset='mediumItalic'>Camera</Text>
        </View>
      </Touchable>
      <Touchable onPress={onGalleryPress}>
        <View style={styles.itemWrapper}>
          <Image source={Images.gallery} style={styles.image} />
          <Text preset='mediumItalic'>Gallery</Text>
        </View>
      </Touchable>
    </View>
  </View>
)

ImagePickerModal.propTypes = {
  title: PropTypes.string,
  onCameraPress: PropTypes.func,
  onGalleryPress: PropTypes.func
}

ImagePickerModal.defaultProps = {
  title: 'Pilih Sumber Foto'
}

export default ImagePickerModal
