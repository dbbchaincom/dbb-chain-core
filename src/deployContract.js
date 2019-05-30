import { AIRDROP_BYTECODE, AIRDROP_ABI } from './metadata'; 
import { generateAccount } from './utils';


/**
 * @desc Send transaction to deploy the Airdrop Smart Contract.
 * @param  {Object}  [airdropParams] - Object wth airdrop params
 * @param  {Number}  [txValue] - Amount of wei to send to contract
 * @param  {Number}  [txGas] - Gas estimate for the deployment transaction
 * @param  {Object}  [web3] - web3 object (from web3.js lib)
 * @param  {Function}  [onTxMined] - Callback to fire after transaction is mined
 * @return {Promise}
 */
const _sendContractDeploymentTx = ({
    airdropParams,
    txGas,
    txValue,
    web3,
    onTxMined
}) => {    
    return new Promise((resolve, reject) => {
        const AirdropContract = web3.eth.contract(AIRDROP_ABI);    
        let {
	    tokenAddress, claimAmountAtomic,
	    claimAmountEthInWei, airdropTransitAddress,
	    referralAmountAtomic
	} = airdropParams;

	console.log(airdropParams);
	
        AirdropContract.new(tokenAddress, claimAmountAtomic, referralAmountAtomic,
			    claimAmountEthInWei, airdropTransitAddress, {
            from: web3.eth.accounts[0],
            data: AIRDROP_BYTECODE,
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


/**
 * @desc Send transaction to deploy the Airdrop Smart Contract.
 * @param  {Number}  [claimAmount] - Amount of tokens to distribute on claim
 * @param  {String}  [tokenAddress] - Token contract address
 * @param  {Number}  [claimAmountEth] - Amount of wei to distribute on claim
 * @param  {Number}  [decimals] - Token decimals
 * @param  {Number}  [linksNumber] - amount of links
 * @param  {String}  [badgeAddress] - Address of the Pillar Badges contract
 * @param  {Object}  [web3] - web3 object (from web3.js lib)
 * @param  {Function}  [onTxMined] - Callback to fire after transaction is mined
 * @return {Object}
 */
export const deployContract = async ({
    claimAmount,
    referralAmount=0,
    tokenAddress,
    decimals,
    claimAmountEth,
    linksNumber,
    badgeAddress,
    web3,
    onTxMined
}) => {

    // Generate special key pair (Aidrop Transit Key Pair) for the airdrop.
    // (Ethereum address from the Airdrop Transit Private Key stored to the Airdrop Smart Contract as AIRDROP_TRANSIT_ADDRESS
    // 
    // Airdrop Transit Private Key used for signing other transit private keys generated per link.
    // 
    // The Airdrop Contract verifies that the private key from the link is signed by the Airdrop Transit Private Key,
    // which means that the claim link was signed by the Airdropper)
    const { privateKey: airdropTransitPK, address: airdropTransitAddress } = generateAccount();
    console.log({airdropTransitPK});
    
    // airdrop contract params
    const claimAmountAtomic = web3.toBigNumber(claimAmount).shift(decimals);
    const referralAmountAtomic = web3.toBigNumber(referralAmount).shift(decimals);
    const claimAmountEthInWei = web3.toBigNumber(claimAmountEth).shift(18);

    const airdropParams = {
        tokenAddress,
        claimAmountAtomic,
	    referralAmountAtomic,
        claimAmountEthInWei,
        airdropTransitAddress,
        badgeAddress
    };
    
    // tx params
    //const gasEstimate = await web3.eth.estimateGasPromise({data: BYTECODE});
    const gasEstimate = 1600000;
    const txGas = gasEstimate + 100000;
    const txValue = claimAmountEthInWei * linksNumber;

    // deploy contract
    const txHash = await _sendContractDeploymentTx({airdropParams, txGas, txValue, web3, onTxMined});

    return {
        txHash, 
        airdropTransitPK,
        airdropTransitAddress
    };
}
