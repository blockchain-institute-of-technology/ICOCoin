import React from 'react'
import Form from './Form'
class Content extends React.Component {
  render() {
    return (
      <div>
        <p>tokenName: {this.props.tokenName}</p>
        <p>openTime: {this.props.openTime}</p>
        <p>closeTime: {this.props.closeTime}</p>
        <p>account: {this.props.account}</p>
       	<p>ETH balance: {this.props.eth_balance}</p>
        <p>tokenBalance: {this.props.tokenBalance}</p>
        <p>Rate (units per gwei): {this.props.rate}</p>
        <p>Total Supply: {this.props.totalSupply}</p>
        <Form buyTokens={this.props.buyTokens} />
      </div>
    )
  }
}

export default Content
