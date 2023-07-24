/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  FeeController,
  FeeControllerInterface,
} from "../../../../@arcadexyz/v2-contracts/contracts/FeeController";

const _abi = [
  {
    inputs: [],
    name: "FC_FeeTooLarge",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "UpdateOriginationFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "UpdateRolloverFee",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_ORIGINATION_FEE",
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
    inputs: [],
    name: "MAX_ROLLOVER_FEE",
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
    inputs: [],
    name: "getOriginationFee",
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
    inputs: [],
    name: "getRolloverFee",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_originationFee",
        type: "uint256",
      },
    ],
    name: "setOriginationFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rolloverFee",
        type: "uint256",
      },
    ],
    name: "setRolloverFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526032600155600a60025534801561001a57600080fd5b5061002433610029565b610079565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6105c9806100886000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80638da5cb5b11610076578063c4c533a61161005b578063c4c533a614610120578063f2fde38b14610129578063fc2e39a61461013c57600080fd5b80638da5cb5b146100e557806396c7c8de1461010d57600080fd5b80632283487d146100a857806348895e27146100bf578063715018a6146100c85780637f2006a0146100d2575b600080fd5b6002545b6040519081526020015b60405180910390f35b6100ac6103e881565b6100d0610144565b005b6100d06100e0366004610566565b6101d6565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b6565b6100d061011b366004610566565b6102cf565b6100ac6101f481565b6100d061013736600461057f565b6103c1565b6001546100ac565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6101d460006104f1565b565b60005473ffffffffffffffffffffffffffffffffffffffff163314610257576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101c1565b6103e8811115610293576040517f69a01c2700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018190556040518181527f9332eb53f897ef131d22653f075bec7267653c207ce387d80fc8521b878c6296906020015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff163314610350576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101c1565b6101f481111561038c576040517f69a01c2700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60028190556040518181527f44b0c2cef7e7d9cc2cf577599fce62a2e5429c8d7218d8beddd5a6a00a94e7e9906020016102c4565b60005473ffffffffffffffffffffffffffffffffffffffff163314610442576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101c1565b73ffffffffffffffffffffffffffffffffffffffff81166104e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016101c1565b6104ee816104f1565b50565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561057857600080fd5b5035919050565b60006020828403121561059157600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146105b557600080fd5b939250505056fea164736f6c6343000812000a";

type FeeControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeController__factory extends ContractFactory {
  constructor(...args: FeeControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FeeController> {
    return super.deploy(overrides || {}) as Promise<FeeController>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FeeController {
    return super.attach(address) as FeeController;
  }
  override connect(signer: Signer): FeeController__factory {
    return super.connect(signer) as FeeController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeControllerInterface {
    return new utils.Interface(_abi) as FeeControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeController {
    return new Contract(address, _abi, signerOrProvider) as FeeController;
  }
}