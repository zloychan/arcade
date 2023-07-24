/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Timelock,
  TimelockInterface,
} from "../../../../../contracts/external/council/features/Timelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_waitTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gsc",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorized",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "callTimestamps",
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
        name: "who",
        type: "address",
      },
    ],
    name: "deauthorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timeValue",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "callHash",
        type: "bytes32",
      },
    ],
    name: "increaseTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "isAuthorized",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "callHash",
        type: "bytes32",
      },
    ],
    name: "registerCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_waitTime",
        type: "uint256",
      },
    ],
    name: "setWaitTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "callHash",
        type: "bytes32",
      },
    ],
    name: "stopCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "timeIncreases",
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
    name: "waitTime",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200137d3803806200137d83398101604081905262000034916200011c565b600080546001600160a01b0319163317905562000072816001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b600383905562000082826200008b565b5050506200015d565b6000546001600160a01b03163314620000dd5760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b80516001600160a01b03811681146200011757600080fd5b919050565b6000806000606084860312156200013257600080fd5b835192506200014460208501620000ff565b91506200015460408501620000ff565b90509250925092565b611210806200016d6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063c8d18a451161008c578063d8e4677511610066578063d8e4677514610217578063df351aaf1461023a578063e4d532661461024d578063fe9fbb801461026057600080fd5b8063c8d18a45146101cd578063ccca123b146101e0578063d7bcb566146101f757600080fd5b806388b49b83116100c857806388b49b831461012a5780638da5cb5b1461013d578063b6a5d7de14610187578063b91816111461019a57600080fd5b806313af4035146100ef57806327c97fa514610104578063821127d414610117575b600080fd5b6101026100fd366004610d90565b610299565b005b610102610112366004610d90565b610366565b610102610125366004610db2565b610433565b610102610138366004610dd4565b61061e565b60005461015d9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b610102610195366004610d90565b610728565b6101bd6101a8366004610d90565b60016020526000908152604090205460ff1681565b604051901515815260200161017e565b6101026101db366004610e68565b610802565b6101e960035481565b60405190815260200161017e565b6101e9610205366004610dd4565b60046020526000908152604090205481565b6101bd610225366004610dd4565b60056020526000908152604090205460ff1681565b610102610248366004610dd4565b610bbe565b61010261025b366004610dd4565b610c2c565b6101bd61026e366004610d90565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60005473ffffffffffffffffffffffffffffffffffffffff16331461031f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610316565b73ffffffffffffffffffffffffffffffffffffffff16600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b3360009081526001602052604090205460ff166104ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f53656e646572206e6f7420417574686f72697a656400000000000000000000006044820152606401610316565b60008181526005602052604090205460ff1615610525576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f76616c75652063616e206f6e6c79206265206368616e676564206f6e636500006044820152606401610316565b60008181526004602052604081205490036105c1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f6d7573742068617665206265656e2070726576696f75736c792072656769737460448201527f65726564000000000000000000000000000000000000000000000000000000006064820152608401610316565b600081815260046020526040812080548492906105df908490610f9f565b9091555050600090815260056020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905550565b60005473ffffffffffffffffffffffffffffffffffffffff16331461069f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610316565b60008181526004602052604090205415610715576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f616c7265616479207265676973746572656400000000000000000000000000006044820152606401610316565b6000908152600460205260409020429055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610316565b6107ff8173ffffffffffffffffffffffffffffffffffffffff16600090815260016020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055565b50565b60025460ff161561086f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f5265656e7472616e6379000000000000000000000000000000000000000000006044820152606401610316565b600280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556040516000906108b290859085908590602001611001565b6040516020818303038152906040528051906020012090506004600082815260200190815260200160002054600003610947576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f63616c6c20686173206e6f74206265656e20696e697469616c697a65640000006044820152606401610316565b600354600082815260046020526040902054429161096491610f9f565b106109cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f6e6f7420656e6f7567682074696d6520686173207061737365640000000000006044820152606401610316565b83518214610a35576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f696e76616c696420666f726d617474696e6700000000000000000000000000006044820152606401610316565b60005b8451811015610b6b576000858281518110610a5557610a55611127565b602002602001015173ffffffffffffffffffffffffffffffffffffffff16858584818110610a8557610a85611127565b9050602002810190610a979190611156565b604051610aa59291906111bb565b6000604051808303816000865af19150503d8060008114610ae2576040519150601f19603f3d011682016040523d82523d6000602084013e610ae7565b606091505b5090915050600181151514610b58576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f63616c6c207265766572746564000000000000000000000000000000000000006044820152606401610316565b5080610b63816111cb565b915050610a38565b5060009081526004602090815260408083208390556005909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00908116909155600280549091169055505050565b333014610c27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f636f6e7472616374206d7573742062652073656c6600000000000000000000006044820152606401610316565b600355565b60005473ffffffffffffffffffffffffffffffffffffffff163314610cad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610316565b6000818152600460205260408120549003610d24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4e6f2063616c6c20746f2062652072656d6f76656400000000000000000000006044820152606401610316565b60009081526004602090815260408083208390556005909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b803573ffffffffffffffffffffffffffffffffffffffff81168114610d8b57600080fd5b919050565b600060208284031215610da257600080fd5b610dab82610d67565b9392505050565b60008060408385031215610dc557600080fd5b50508035926020909101359150565b600060208284031215610de657600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008083601f840112610e2e57600080fd5b50813567ffffffffffffffff811115610e4657600080fd5b6020830191508360208260051b8501011115610e6157600080fd5b9250929050565b600080600060408486031215610e7d57600080fd5b833567ffffffffffffffff80821115610e9557600080fd5b818601915086601f830112610ea957600080fd5b8135602082821115610ebd57610ebd610ded565b8160051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108682111715610f0057610f00610ded565b6040529283528481018201928281018b851115610f1c57600080fd5b958301955b84871015610f3f57610f3287610d67565b8152958301958301610f21565b5097505087013592505080821115610f5657600080fd5b50610f6386828701610e1c565b9497909650939450505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820180821115610fb257610fb2610f70565b92915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b604080825284519082018190526000906020906060840190828801845b8281101561105057815173ffffffffffffffffffffffffffffffffffffffff168452928401929084019060010161101e565b50505083810382850152848152818101600586901b820183018760005b88811015611118577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301845281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18b36030181126110ce57600080fd5b8a01868101903567ffffffffffffffff8111156110ea57600080fd5b8036038213156110f957600080fd5b611104858284610fb8565b95880195945050509085019060010161106d565b50909998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261118b57600080fd5b83018035915067ffffffffffffffff8211156111a657600080fd5b602001915036819003821315610e6157600080fd5b8183823760009101908152919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036111fc576111fc610f70565b506001019056fea164736f6c6343000812000a";

type TimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Timelock__factory extends ContractFactory {
  constructor(...args: TimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _waitTime: PromiseOrValue<BigNumberish>,
    _governance: PromiseOrValue<string>,
    _gsc: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Timelock> {
    return super.deploy(
      _waitTime,
      _governance,
      _gsc,
      overrides || {}
    ) as Promise<Timelock>;
  }
  override getDeployTransaction(
    _waitTime: PromiseOrValue<BigNumberish>,
    _governance: PromiseOrValue<string>,
    _gsc: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _waitTime,
      _governance,
      _gsc,
      overrides || {}
    );
  }
  override attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  override connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new utils.Interface(_abi) as TimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}
