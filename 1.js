loadScript('/home/jackson/go-ethereum/ether-test/temp.js')

var myAbi = output.contracts['Vault.sol:Vault'].abi

var myContract = eth.contract(myAbi)

var myBinCode = "0x" + output.contracts['Vault.sol:Vault'].bin

personal.unlockAccount(eth.accounts[0],'123',300)

var deployObject = { from: eth.accounts[0], data: myBinCode, gas: 1000000 }

var myContractInstance = myContract.new(deployObject)
