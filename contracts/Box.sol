// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 < 0.9.0;

contract Box {
    uint256 public value;

    function setValue(uint256 _value) public {
        value = _value;
    }

}

//Proxy contract address: 0x48bAbD5c6c7A6a308f9FC5F87707fDB34bF65E5a
//Implementation contract address: 0x536379dBa1aa446c93cba582b5B63E4814469667
//Admin contract address: 0x5927D0aAcDf3d7f42b511EB92F03C13f34697635

//npm hardhat verify --network sepolia 0x48bAbD5c6c7A6a308f9FC5F87707fDB34bF65E5a