pragma solidity ^0.8.17;
contract Vault {
    uint vaultData;
    function set(uint data) public{
        vaultData = data;
    }

    function get() public view returns (uint) {
        return vaultData;
    }
}