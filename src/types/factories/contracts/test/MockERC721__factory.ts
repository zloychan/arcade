/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockERC721,
  MockERC721Interface,
} from "../../../contracts/test/MockERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mintId",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200249b3803806200249b833981016040819052620000349162000123565b818160006200004483826200021c565b5060016200005382826200021c565b5050505050620002e8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008657600080fd5b81516001600160401b0380821115620000a357620000a36200005e565b604051601f8301601f19908116603f01168101908282118183101715620000ce57620000ce6200005e565b81604052838152602092508683858801011115620000eb57600080fd5b600091505b838210156200010f5785820183015181830184015290820190620000f0565b600093810190920192909252949350505050565b600080604083850312156200013757600080fd5b82516001600160401b03808211156200014f57600080fd5b6200015d8683870162000074565b935060208501519150808211156200017457600080fd5b50620001838582860162000074565b9150509250929050565b600181811c90821680620001a257607f821691505b602082108103620001c357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021757600081815260208120601f850160051c81016020861015620001f25750805b601f850160051c820191505b818110156200021357828155600101620001fe565b5050505b505050565b81516001600160401b038111156200023857620002386200005e565b62000250816200024984546200018d565b84620001c9565b602080601f8311600181146200028857600084156200026f5750858301515b600019600386901b1c1916600185901b17855562000213565b600085815260208120601f198616915b82811015620002b95788860151825594840194600190910190840162000298565b5085821015620002d85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6121a380620002f86000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c806342966c68116100cd57806395d89b4111610081578063b88d4fde11610066578063b88d4fde146102b8578063c87b56dd146102cb578063e985e9c5146102de57600080fd5b806395d89b411461029d578063a22cb465146102a557600080fd5b80636352211e116100b25780636352211e146102645780636a6278421461027757806370a082311461028a57600080fd5b806342966c681461023e5780634f6ccce71461025157600080fd5b806318160ddd116101245780632d01fb0a116101095780632d01fb0a146102055780632f745c591461021857806342842e0e1461022b57600080fd5b806318160ddd146101e057806323b872dd146101f257600080fd5b806301ffc9a71461015657806306fdde031461017e578063081812fc14610193578063095ea7b3146101cb575b600080fd5b610169610164366004611c55565b610327565b60405190151581526020015b60405180910390f35b610186610383565b6040516101759190611ce0565b6101a66101a1366004611cf3565b610415565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610175565b6101de6101d9366004611d30565b6104f4565b005b6008545b604051908152602001610175565b6101de610200366004611d5a565b610680565b6101e4610213366004611d96565b610721565b6101e4610226366004611d30565b610742565b6101de610239366004611d5a565b610811565b6101de61024c366004611cf3565b61082c565b6101e461025f366004611cf3565b610838565b6101a6610272366004611cf3565b6108f6565b6101e4610285366004611dc2565b6109a8565b6101e4610298366004611dc2565b6109db565b610186610aa9565b6101de6102b3366004611ddd565b610ab8565b6101de6102c6366004611e48565b610bce565b6101866102d9366004611cf3565b610c76565b6101696102ec366004611f42565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d6300000000000000000000000000000000000000000000000000000000148061037d575061037d82610d93565b92915050565b60606000805461039290611f6c565b80601f01602080910402602001604051908101604052809291908181526020018280546103be90611f6c565b801561040b5780601f106103e05761010080835404028352916020019161040b565b820191906000526020600020905b8154815290600101906020018083116103ee57829003601f168201915b5050505050905090565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff166104cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60006104ff826108f6565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016104c2565b3373ffffffffffffffffffffffffffffffffffffffff821614806105e557506105e581336102ec565b610671576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016104c2565b61067b8383610e76565b505050565b61068a3382610f16565b610716576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016104c2565b61067b838383611086565b600061072d82846112f8565b61073b600a80546001019055565b5090919050565b600061074d836109db565b82106107db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e647300000000000000000000000000000000000000000060648201526084016104c2565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600660209081526040808320938352929052205490565b61067b83838360405180602001604052806000815250610bce565b610835816114c6565b50565b600061084360085490565b82106108d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e6473000000000000000000000000000000000000000060648201526084016104c2565b600882815481106108e4576108e4611fbf565b90600052602060002001549050919050565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff168061037d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016104c2565b60006109b3600a5490565b90506109c8826109c3833061201d565b6112f8565b6109d6600a80546001019055565b919050565b600073ffffffffffffffffffffffffffffffffffffffff8216610a80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016104c2565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b60606001805461039290611f6c565b3373ffffffffffffffffffffffffffffffffffffffff831603610b37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104c2565b33600081815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610bd83383610f16565b610c64576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016104c2565b610c708484848461159f565b50505050565b60008181526002602052604090205460609073ffffffffffffffffffffffffffffffffffffffff16610d2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016104c2565b6000610d4160408051602081019091526000815290565b90506000815111610d615760405180602001604052806000815250610d8c565b80610d6b84611642565b604051602001610d7c929190612030565b6040516020818303038152906040525b9392505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480610e2657507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061037d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461037d565b600081815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091558190610ed0826108f6565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff16610fc7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084016104c2565b6000610fd2836108f6565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061104157508373ffffffffffffffffffffffffffffffffffffffff1661102984610415565b73ffffffffffffffffffffffffffffffffffffffff16145b8061107e575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff166110a6826108f6565b73ffffffffffffffffffffffffffffffffffffffff1614611149576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e000000000000000000000000000000000000000000000060648201526084016104c2565b73ffffffffffffffffffffffffffffffffffffffff82166111eb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016104c2565b6111f6838383611777565b611201600082610e76565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260036020526040812080546001929061123790849061205f565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260036020526040812080546001929061127290849061201d565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b73ffffffffffffffffffffffffffffffffffffffff8216611375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104c2565b60008181526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1615611401576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104c2565b61140d60008383611777565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020526040812080546001929061144390849061201d565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006114d1826108f6565b90506114df81600084611777565b6114ea600083610e76565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260036020526040812080546001929061152090849061205f565b909155505060008281526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555183919073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6115aa848484611086565b6115b68484848461187d565b610c70576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016104c2565b60608160000361168557505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b81156116af578061169981612072565b91506116a89050600a836120d9565b9150611689565b60008167ffffffffffffffff8111156116ca576116ca611e19565b6040519080825280601f01601f1916602001820160405280156116f4576020820181803683370190505b5090505b841561107e5761170960018361205f565b9150611716600a866120ed565b61172190603061201d565b60f81b81838151811061173657611736611fbf565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611770600a866120d9565b94506116f8565b73ffffffffffffffffffffffffffffffffffffffff83166117df576117da81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b61181c565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461181c5761181c8382611a70565b73ffffffffffffffffffffffffffffffffffffffff82166118405761067b81611b27565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461067b5761067b8282611bd6565b600073ffffffffffffffffffffffffffffffffffffffff84163b15611a65576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906118f4903390899088908890600401612101565b6020604051808303816000875af192505050801561194d575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261194a9181019061214a565b60015b611a1a573d80801561197b576040519150601f19603f3d011682016040523d82523d6000602084013e611980565b606091505b508051600003611a12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016104c2565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a020000000000000000000000000000000000000000000000000000000014905061107e565b506001949350505050565b60006001611a7d846109db565b611a87919061205f565b600083815260076020526040902054909150808214611ae75773ffffffffffffffffffffffffffffffffffffffff841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b50600091825260076020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600681528383209183525290812055565b600854600090611b399060019061205f565b60008381526009602052604081205460088054939450909284908110611b6157611b61611fbf565b906000526020600020015490508060088381548110611b8257611b82611fbf565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611bba57611bba612167565b6001900381819060005260206000200160009055905550505050565b6000611be1836109db565b73ffffffffffffffffffffffffffffffffffffffff9093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461083557600080fd5b600060208284031215611c6757600080fd5b8135610d8c81611c27565b60005b83811015611c8d578181015183820152602001611c75565b50506000910152565b60008151808452611cae816020860160208601611c72565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610d8c6020830184611c96565b600060208284031215611d0557600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146109d657600080fd5b60008060408385031215611d4357600080fd5b611d4c83611d0c565b946020939093013593505050565b600080600060608486031215611d6f57600080fd5b611d7884611d0c565b9250611d8660208501611d0c565b9150604084013590509250925092565b60008060408385031215611da957600080fd5b82359150611db960208401611d0c565b90509250929050565b600060208284031215611dd457600080fd5b610d8c82611d0c565b60008060408385031215611df057600080fd5b611df983611d0c565b915060208301358015158114611e0e57600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060808587031215611e5e57600080fd5b611e6785611d0c565b9350611e7560208601611d0c565b925060408501359150606085013567ffffffffffffffff80821115611e9957600080fd5b818701915087601f830112611ead57600080fd5b813581811115611ebf57611ebf611e19565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611f0557611f05611e19565b816040528281528a6020848701011115611f1e57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215611f5557600080fd5b611f5e83611d0c565b9150611db960208401611d0c565b600181811c90821680611f8057607f821691505b602082108103611fb9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561037d5761037d611fee565b60008351612042818460208801611c72565b835190830190612056818360208801611c72565b01949350505050565b8181038181111561037d5761037d611fee565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036120a3576120a3611fee565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826120e8576120e86120aa565b500490565b6000826120fc576120fc6120aa565b500690565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526121406080830184611c96565b9695505050505050565b60006020828403121561215c57600080fd5b8151610d8c81611c27565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea164736f6c6343000812000a";

type MockERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC721__factory extends ContractFactory {
  constructor(...args: MockERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockERC721> {
    return super.deploy(name, symbol, overrides || {}) as Promise<MockERC721>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): MockERC721 {
    return super.attach(address) as MockERC721;
  }
  override connect(signer: Signer): MockERC721__factory {
    return super.connect(signer) as MockERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC721Interface {
    return new utils.Interface(_abi) as MockERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC721 {
    return new Contract(address, _abi, signerOrProvider) as MockERC721;
  }
}