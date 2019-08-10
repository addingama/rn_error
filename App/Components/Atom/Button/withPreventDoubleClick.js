import React from 'react'
import debounce from 'lodash.debounce'

const withPreventDoubleClick = (WrappedComponent, delay = 500) => {
  class PreventDoubleClick extends React.PureComponent {
    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress()
    }

    onPress = debounce(this.debouncedOnPress.bind(this), delay, {
      leading: true,
      trailing: false
    })

    render () {
      return <WrappedComponent {...this.props} onPress={this.onPress} />
    }
  }

  PreventDoubleClick.displayName = `withPreventDoubleClick(${WrappedComponent.displayName ||
    WrappedComponent.name})`
  return PreventDoubleClick
}

export default withPreventDoubleClick
