import React from 'react'

class from extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.props.buyTokens(this.amount.value)
      }}>
        <div class='form-group'>
          <label>Buy Tokens</label>
          <input ref={(input) => this.amount = input} class='form-control'></input>
        </div>
        <button type='submit' class='btn btn-primary'>Buy</button>
        <hr />
      </form>
    )
  }
}

export default from