import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import {Text} from '@Atom'
import { Colors } from '@Themes'

const SectionTitle = ({title}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.divider,
    paddingVertical: 5,
    marginVertical: 5
  },
  title: {
    textAlign: 'center',
    fontSize: 14
  }
})

SectionTitle.propTypes = {
  title: PropTypes.string
}

export default SectionTitle
