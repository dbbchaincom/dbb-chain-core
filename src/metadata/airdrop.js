export const ABI = [
    {
      "constant": false,
      "inputs": [],
      "name": "stop",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x07da68f5"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "SILVER_BADGE_ID",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x0ac23b6d"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "TOKEN_ADDRESS",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x0bdf5300"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "CLAIM_AMOUNT",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x270ef385"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "AIRDROPPER",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x368a5e34"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x3f4ba83a"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "REFERRAL_AMOUNT_2",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x4bc3b05c"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x5c975abb"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "REFERRAL_AMOUNT",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x611f1931"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x715018a6"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "stopped",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x75f12b21"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8456cb59"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8da5cb5b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "AIRDROP_TRANSIT_ADDRESS",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x998ac104"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "BRONZE_BADGE_ID",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xbe2f6b7c"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "CLAIM_AMOUNT_ETH",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc90c205b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "GOLD_BADGE_ID",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xcb12bfb3"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf2fde38b"
    },
    {
      "inputs": [
        {
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "name": "_claimAmount",
          "type": "uint256"
        },
        {
          "name": "_referralAmount",
          "type": "uint256"
        },
        {
          "name": "_referralAmount2",
          "type": "uint256"
        },
        {
          "name": "_claimAmountEth",
          "type": "uint256"
        },
        {
          "name": "_airdropTransitAddress",
          "type": "address"
        },
        {
          "name": "_badgesAddress",
          "type": "address"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "transitAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "LogWithdraw",
      "type": "event",
      "signature": "0x9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "badgeId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "BadgeAwarded",
      "type": "event",
      "signature": "0x3f1171297c35ca225263338ac9a229d96149e8c1eea55d597eaa85b135f8640a"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Stop",
      "type": "event",
      "signature": "0xbedf0f4abfe86d4ffad593d9607fe70e83ea706033d44d24b3b6283cf3fc4f6b"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event",
      "signature": "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "Unpause",
      "type": "event",
      "signature": "0xaeb196d352664784d1900b0e7414a8face7d29f4dae8c4b0cf68ed477423bbf4"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event",
      "signature": "0xb48f42c7a4b7d66b43c8fccc1aafdac7c8ca6d024c15bb1d427d547f00024380"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true
        },
        {
          "name": "_referralAddress",
          "type": "address"
        },
        {
          "name": "_v",
          "type": "uint8"
        },
        {
          "name": "_r",
          "type": "bytes32"
        },
        {
          "name": "_s",
          "type": "bytes32"
        }
      ],
      "name": "OwnershipTransferred",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "event",
      "anonymous": false,
      "signature": "0x9cadb178c865b213243cb2976484edcfcdd6f5995d334eae61ea54c78955d5cf"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_transitAddress",
          "type": "address"
        },
        {
          "name": "_addressSigned",
          "type": "address"
        },
        {
          "name": "_referralAddress",
          "type": "address"
        },
        {
          "name": "_v",
          "type": "uint8"
        },
        {
          "name": "_r",
          "type": "bytes32"
        },
        {
          "name": "_s",
          "type": "bytes32"
        }
      ],
      "name": "verifyLinkPrivateKey",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0x0c82ed84"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_transitAddress",
          "type": "address"
        },
        {
          "name": "_addressSigned",
          "type": "address"
        },
        {
          "name": "_v",
          "type": "uint8"
        },
        {
          "name": "_r",
          "type": "bytes32"
        },
        {
          "name": "_s",
          "type": "bytes32"
        },
        {
          "name": "_keyS",
          "type": "bytes32"
        },
        {
          "name": "_recipientV",
          "type": "uint8"
        },
        {
          "name": "_recipientR",
          "type": "bytes32"
        },
        {
          "name": "_recipientS",
          "type": "bytes32"
        }
      ],
      "name": "verifyReceiverAddress",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0x8492a8ca"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_recipient",
          "type": "address"
        },
        {
          "name": "_referralAddress",
          "type": "address"
        },
        {
          "name": "_transitAddress",
          "type": "address"
        },
        {
          "name": "_keyV",
          "type": "uint8"
        },
        {
          "name": "_keyR",
          "type": "bytes32"
        },
        {
          "name": "_keyS",
          "type": "bytes32"
        },
        {
          "name": "_recipientV",
          "type": "uint8"
        },
        {
          "name": "_recipientR",
          "type": "bytes32"
        },
        {
          "name": "_recipientS",
          "type": "bytes32"
        }
      ],
      "name": "checkWithdrawal",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xdf5f53f1"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_recipient",
          "type": "address"
        },
        {
          "name": "_referralAddress",
          "type": "address"
        },
        {
          "name": "_transitAddress",
          "type": "address"
        },
        {
          "name": "_keyV",
          "type": "uint8"
        },
        {
          "name": "_keyR",
          "type": "bytes32"
        },
        {
          "name": "_keyS",
          "type": "bytes32"
        },
        {
          "name": "_recipientV",
          "type": "uint8"
        },
        {
          "name": "_recipientR",
          "type": "bytes32"
        },
        {
          "name": "_recipientS",
          "type": "bytes32"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x3d8d020a"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_transitAddress",
          "type": "address"
        }
      ],
      "name": "isLinkClaimed",
      "outputs": [
        {
          "name": "claimed",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xb2e357b4"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getEtherBack",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xfd68610f"
    }
  ];
    
export const BYTECODE =  "608060405260008060146101000a81548160ff02191690831515021790555060008060156101000a81548160ff02191690831515021790555060076001556008600255600960035560405160e08061222083398101806040528101908080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508560058190555084600681905550836007819055508260088190555081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050506120058061021b6000396000f30060806040526004361061013e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806307da68f5146101435780630ac23b6d1461015a5780630bdf5300146101855780630c82ed84146101dc578063270ef385146102a0578063368a5e34146102cb5780633d8d020a146103225780633f4ba83a1461040f5780634bc3b05c146104265780635c975abb14610451578063611f193114610480578063715018a6146104ab57806375f12b21146104c25780638456cb59146104f15780638da5cb5b14610508578063998ac1041461055f578063b2e357b4146105b6578063be2f6b7c14610611578063c90c205b1461063c578063cb12bfb314610667578063cd26ac8314610692578063df5f53f114610736578063f2fde38b14610823578063fd68610f14610866575b600080fd5b34801561014f57600080fd5b50610158610895565b005b34801561016657600080fd5b5061016f610955565b6040518082815260200191505060405180910390f35b34801561019157600080fd5b5061019a61095b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101e857600080fd5b50610286600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050610981565b604051808215151515815260200191505060405180910390f35b3480156102ac57600080fd5b506102b5610b04565b6040518082815260200191505060405180910390f35b3480156102d757600080fd5b506102e0610b0a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561032e57600080fd5b506103f5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050610b30565b604051808215151515815260200191505060405180910390f35b34801561041b57600080fd5b50610424611803565b005b34801561043257600080fd5b5061043b6118c1565b6040518082815260200191505060405180910390f35b34801561045d57600080fd5b506104666118c7565b604051808215151515815260200191505060405180910390f35b34801561048c57600080fd5b506104956118da565b6040518082815260200191505060405180910390f35b3480156104b757600080fd5b506104c06118e0565b005b3480156104ce57600080fd5b506104d76119e2565b604051808215151515815260200191505060405180910390f35b3480156104fd57600080fd5b506105066119f5565b005b34801561051457600080fd5b5061051d611ab5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561056b57600080fd5b50610574611ada565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105c257600080fd5b506105f7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b00565b604051808215151515815260200191505060405180910390f35b34801561061d57600080fd5b50610626611b56565b6040518082815260200191505060405180910390f35b34801561064857600080fd5b50610651611b5c565b6040518082815260200191505060405180910390f35b34801561067357600080fd5b5061067c611b62565b6040518082815260200191505060405180910390f35b34801561069e57600080fd5b5061071c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050611b68565b604051808215151515815260200191505060405180910390f35b34801561074257600080fd5b50610809600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050611ca7565b604051808215151515815260200191505060405180910390f35b34801561082f57600080fd5b50610864600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d93565b005b34801561087257600080fd5b5061087b611dfa565b604051808215151515815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108f057600080fd5b600060159054906101000a900460ff1615151561090c57600080fd5b6001600060156101000a81548160ff0219169083151502179055507fbedf0f4abfe86d4ffad593d9607fe70e83ea706033d44d24b3b6283cf3fc4f6b60405160405180910390a1565b60025481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000878760405180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019250505060405180910390209150600182878787604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af1158015610abb573d6000803e3d6000fd5b5050506020604051035190508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614925050509695505050505050565b60055481565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008060149054906101000a900460ff16151515610b5057600080fd5b600060159054906101000a900460ff16151515610b6c57600080fd5b610b7d8c8c8c8c8c8c8c8c8c611ca7565b1515610b8857600080fd5b6001600d60008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600554118015610c415750600073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b15610da357600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691508173ffffffffffffffffffffffffffffffffffffffff166323b872dd600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168e6005546040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610d6657600080fd5b505af1158015610d7a573d6000803e3d6000fd5b505050506040513d6020811015610d9057600080fd5b8101908080519060200190929190505050505b6000600654118015610de25750600073ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff1614155b8015610e3d5750600073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b156116fc57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506001600c60008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401600c60008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600a600c60008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054111515611072578073ffffffffffffffffffffffffffffffffffffffff166323b872dd600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168d6006546040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561103157600080fd5b505af1158015611045573d6000803e3d6000fd5b505050506040513d602081101561105b57600080fd5b8101908080519060200190929190505050506116fb565b6000600a600c60008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548115156110bf57fe5b0614156111fe578073ffffffffffffffffffffffffffffffffffffffff166323b872dd600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168d6007546040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156111c157600080fd5b505af11580156111d5573d6000803e3d6000fd5b505050506040513d60208110156111eb57600080fd5b8101908080519060200190929190505050505b6064600c60008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414156113a857600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d6afb1f56003548d60016040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b15801561131657600080fd5b505af115801561132a573d6000803e3d6000fd5b505050507f3f1171297c35ca225263338ac9a229d96149e8c1eea55d597eaa85b135f8640a8b60035442604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a16116fa565b6032600c60008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054141561155257600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d6afb1f56002548d60016040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b1580156114c057600080fd5b505af11580156114d4573d6000803e3d6000fd5b505050507f3f1171297c35ca225263338ac9a229d96149e8c1eea55d597eaa85b135f8640a8b60025442604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a16116f9565b600b600c60008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414156116f857600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d6afb1f56001548d60016040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b15801561166a57600080fd5b505af115801561167e573d6000803e3d6000fd5b505050507f3f1171297c35ca225263338ac9a229d96149e8c1eea55d597eaa85b135f8640a8b60015442604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a15b5b5b5b5b60006008541115611751578b73ffffffffffffffffffffffffffffffffffffffff166108fc6008549081150290604051600060405180830381858888f1935050505015801561174f573d6000803e3d6000fd5b505b7f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d12720998a8d42604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a16001925050509998505050505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561185e57600080fd5b600060149054906101000a900460ff16151561187957600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b60075481565b600060149054906101000a900460ff1681565b60065481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561193b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600060159054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a5057600080fd5b600060149054906101000a900460ff16151515611a6c57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600d60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60015481565b60085481565b60035481565b60008060008660405180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140191505060405180910390209150600182878787604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af1158015611c5f573d6000803e3d6000fd5b5050506020604051035190508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16149250505095945050505050565b6000801515600d60008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141515611d0757600080fd5b611d37600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16898b8a8a8a610981565b1515611d4257600080fd5b611d4f888b868686611b68565b1515611d5a57600080fd5b6008543073ffffffffffffffffffffffffffffffffffffffff163110151515611d8257600080fd5b600190509998505050505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611dee57600080fd5b611df781611edf565b50565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611e5857600080fd5b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015611ed7573d6000803e3d6000fd5b506001905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611f1b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a7230582050a7dba4d69f05ba5294e36a9c848f34e6f79eae0bb73c58815f2ba821a48ea60029";
