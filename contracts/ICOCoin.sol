pragma solidity ^0.4.19;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract ICOCoin is MintableToken {
    string public name = "ICO COIN";
    string public symbol = "ICO";
    uint8 public decimals = 0;
}