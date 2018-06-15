import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
import ICOCoin from '../../build/contracts/ICOCoin.json'
import ICOCoinCrowdsale from '../../build/contracts/ICOCoinCrowdsale.json'
import Content from './Content'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tokenName:'',
      account: '0x0',
      openTime:0,
      closeTime:0,
      eth_balance:0,
      rate:0,
      tokenBalance:0,
      totalSupply:0,
    }

    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
    }

    this.web3 = new Web3(this.web3Provider)

    this.token = TruffleContract(ICOCoin)
    this.crowdsale = TruffleContract(ICOCoinCrowdsale)
    this.token.setProvider(this.web3Provider)
    this.crowdsale.setProvider(this.web3Provider)

    this.buyTokens = this.buyTokens.bind(this)
    this.watchEvents = this.watchEvents.bind(this)
  }

  buyTokens(candidateId) {
    /*this.setState({ voting: true })
    this.electionInstance.vote(candidateId, { from: this.state.account }).then((result) =>
      this.setState({ hasVoted: true })
    )*/
  }
    watchEvents() {
    /*// TODO: trigger event when vote is counted, not when component renders
    this.electionInstance.votedEvent({}, {
      fromBlock: 0,
      toBlock: 'latest'
    }).watch((error, event) => {
      this.setState({ voting: false })
    })*/
  }

  componentDidMount() {
    // TODO: Refactor with promise chain
    this.web3.eth.getCoinbase((err, account) => {
      this.account = account
      this.setState({ account });
      this.token.deployed().then((tokenInstance) => {
        this.tokenInstance = tokenInstance
        //this.watchEvents()
        this.tokenInstance.name().then((name) =>{ this.setState({tokenName:name})});
        //this.tokenInstance.balanceOf(this.account).then((balance) =>{this.setState({tokenBalance:balance})});
      });
      this.crowdsale.deployed().then((crowdsaleInst) => {
        this.crowdsaleInst = crowdsaleInst
        this.crowdsaleInst.openingTime().then((time) =>{this.setState({openTime:time})})
      });
    });
  }

  





  render() {
    return (
      <div class='row'>
        <div class='col-lg-12 text-center' >
          <br/>
          { this.state.loading 
            ? <p class='text-center'>Loading...</p>
            : <Content
            	 tokenName={this.state.tokenName}
                account={this.state.account}
                openTime={this.state.openTime}
                closeTime={this.state.closeTime}
                eth_balance={this.state.eth_balance}
                rate={this.state.rate}
                tokenBalance={this.state.tokenBalance}
                totalSupply={this.state.totalSupply} />
          }
        </div>
      </div>
    )
  }
}


ReactDOM.render(
   <App />,
   document.querySelector('#root')
)














/*
// Checking if Web3 has been injected by the browser (Mist/MetaMask)
if (typeof web3 !== 'undefined') {
  // Use Mist/MetaMask's provider.
  web3 = new Web3(web3.currentProvider);
  console.log('Injected web3 detected.');

 } else {
   // Fallback to localhost if no web3 injection. We've configured this to
   // use the development console's port by default.
  var provider = new Web3.providers.HttpProvider('http://localhost:7545');
  web3 = new Web3(provider);
  console.log('No web3 instance injected, using Local web3.');
 }

web3.eth.defaultAccount = web3.eth.accounts[0];
web3.personal.unlockAccount(web3.eth.defaultAccount);

const tokenAdd = '0x66a4b952c3dc8885258b1f077687e944c5e3a782';
const tokenContract = web3.eth.contract(coinABI).at(tokenAdd);//,{from:'0x09bd5Ad3D21047825adB6adb91eA9e2Bf1f88Ca5'}).at(tokenAdd);
const saleAdd = '0x2b668a50a8d4b1b3609e38e7bd0c45456b94adc6';
//tokenContract.mint(0x66a4b952c3dc8885258b1f077687e944c5e3a782, 10);
//console.log(tokenContract.totalSupply().toString(10));
//console.log(tokenContract.toString(10));
const crowdsaleContract = web3.eth.contract(CrowdsaleABI).at(saleAdd);


//crowdsaleContract.buyTokens(0x5B18e78B0E578D20551C11a86C0932F91c178a5f, {gas:5990000,value:10});
//console.log(tokenContract.balanceOf(web3.eth.accounts[0]).toString(10));
crowdsaleContract.buyTokens(web3.eth.accounts[0],{from: web3.eth.accounts[0], value: web3.toWei(1,"ether")});
//console.log(tokenContract.balanceOf(web3.eth.accounts[0]).toString(10));

$( "#name" ).text(tokenContract.name());
$( "#open_time").text(crowdsaleContract.openingTime());
$( "#close_time").text(crowdsaleContract.closingTime());
$( "#rate").text(crowdsaleContract.rate());
$( "#supply").text(tokenContract.totalSupply().toString(10));
$( "#balance").text(tokenContract.balanceOf(web3.eth.accounts[0]).toString(10));
$( "#account").text(web3.eth.accounts[0].toString(10));
$( "#eth-balance").text(web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0])));
$( "#buy" ).click(function() {
  crowdsaleContract.buyTokens(web3.eth.accounts[0],{from: web3.eth.accounts[0], value: web3.toWei(.1,"ether")});
  $( "#balance").text(tokenContract.balanceOf(web3.eth.accounts[0]).toString(10));
  $( "#eth-balance").text(web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0])));
  $( "#supply").text(tokenContract.totalSupply().toString(10));
});

*/
