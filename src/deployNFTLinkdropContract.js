import { LINKDROP_NFT_BYTECODE, LINKDROP_NFT_ABI } from './metadata'; 
import { generateAccount } from './utils';


const _sendContractDeploymentTx = ({
    contractParams,
    txGas,
    txValue,
    web3,
    onTxMined
}) => {    
    return new Promise((resolve, reject) => {
        const AirdropContract = web3.eth.contract(LINKDROP_NFT_ABI);    
        let {
	    tokenAddress,
	    verificationAddress
	} = contractParams;
        
        AirdropContract.new(tokenAddress, verificationAddress, {
            from: web3.eth.accounts[0],
            data: LINKDROP_NFT_BYTECODE,
            value: txValue,
            gas: txGas
        },  (err, airdropContract) => {
            if(err) { reject(err); return null;}
            // NOTE: The callback will fire twice!
            // Once the contract has the transactionHash property set and once its deployed on an address.
            
            // e.g. check tx hash on the first call (transaction send)
            if(!airdropContract.address) {
                resolve(airdropContract.transactionHash); // The hash of the transaction, which deploys the contract  
                // check address on the second call (contract deployed)
            } else {
                onTxMined(airdropContract.address);
            }
        });
    });
}         


export const deployNFTLinkdropContract = async ({
    tokenAddress,
    web3,
    onTxMined
}) => {

    let { privateKey: linkdropPK, address: verificationAddress } = generateAccount();
    linkdropPK = linkdropPK.toString('hex');
    console.log({linkdropPK});
    
    // airdrop contract params
    const contractParams = {
        tokenAddress,
        verificationAddress
    };
    
    // tx params
    //const gasEstimate = await web3.eth.estimateGasPromise({data: BYTECODE});
    const gasEstimate = 1600000;
    const txGas = gasEstimate + 100000;
    const txValue = 0;
    
    // deploy contract
    const txHash = await _sendContractDeploymentTx({contractParams, txGas, txValue, web3, onTxMined});

    return {
        txHash, 
	linkdropPK
    };
}
