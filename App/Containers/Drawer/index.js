import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { DrawerItems } from 'react-navigation'
import { connect } from 'react-redux'

import { Avatar, Icon } from 'react-native-elements'
import { Metrics, Colors, Pallete } from '../../Themes'

import Text from '../../Components/Atom'

class DrawerContent extends Component {
  state = { }
  render () {
    const { user } = this.props
    if (!user) return null
    // return (
    //   <ScrollView>
    //     <View style={{padding: Metrics.baseMargin, backgroundColor: Colors.darkPrimary}}>
    //       <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Metrics.doubleBaseMargin }}>
    //         <Avatar rounded size='large' source={{ uri: user.photo ? user.photo : 'https://bodiezpro.com/wp-content/uploads/2015/09/medium-default-avatar.png' }} />
    //         <View style={{ marginHorizontal: 20 }}>
    //           <Text preset='largeBold' style={{ color: Pallete.white }}>{user.name}</Text>
    //           <Text preset='medium' style={{ color: Pallete.white }}>{user.role_name}</Text>
    //         </View>
    //       </View>
    //     </View>

    //     <DrawerItems
    //       {...this.props}
    //       getLabel={(scene) => (
    //         <View style={{ paddingVertical: 15 }}>
    //           <Text>{this.props.getLabel(scene)}</Text>
    //         </View>)}
    //       activeTintColor={Colors.primary} inactiveTintColor={Colors.primary} />
    //     <Text style={{textAlign: 'center', padding: 20}}>v.2.1.0</Text>
    //   </ScrollView>
    // )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
