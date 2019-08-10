import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import {CheckBox, Button} from '@Atom'
import MarketingStatus from '../../../Fixtures/MarketingStatus'

class StatusChooser extends Component {
  constructor (props) {
    super(props)
    this.state = {
      item: props.item || { status: 0 }
    }
  }

  selectStatus = (status) => {
    const { item } = this.state
    this.setState({item: { ...item, status }})
  }

  updateStatus = () => {
    const { item } = this.state
    this.props.onSave(item)
  }
  render () {
    const { item } = this.state
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <CheckBox title={MarketingStatus[0]}
            checked={item.status === 0}
            onPress={() => this.selectStatus(0)} />
          <CheckBox title={MarketingStatus[1]}
            checked={item.status === 1}
            onPress={() => this.selectStatus(1)} />
          <CheckBox title={MarketingStatus[2]}
            checked={item.status === 2}
            onPress={() => this.selectStatus(2)} />
          <CheckBox title={MarketingStatus[3]}
            checked={item.status === 3}
            onPress={() => this.selectStatus(3)} />
          <CheckBox title={MarketingStatus[4]}
            checked={item.status === 4}
            onPress={() => this.selectStatus(4)} />
          <CheckBox title={MarketingStatus[5]}
            checked={item.status === 5}
            onPress={() => this.selectStatus(5)} />
        </View>
        <View>
          <Button title='Simpan' preset='accent' loading={this.props.posting} onPress={this.updateStatus} />
        </View>
      </View>
    )
  }
}

StatusChooser.propTypes = {
  item: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired
}
export default StatusChooser
