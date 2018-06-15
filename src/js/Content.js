
import React from 'react'
class Content extends React.Component {
  render() {
    return (
      <div>
        <p>tokenName: {this.props.tokenName}</p>
        <p>tokenBalance: {this.props.tokenBalance}</p>
      </div>
    )
  }
}

export default Content
