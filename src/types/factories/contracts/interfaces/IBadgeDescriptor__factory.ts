/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBadgeDescriptor,
  IBadgeDescriptorInterface,
} from "../../../contracts/interfaces/IBadgeDescriptor";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "newBaseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
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
];

export class IBadgeDescriptor__factory {
  static readonly abi = _abi;
  static createInterface(): IBadgeDescriptorInterface {
    return new utils.Interface(_abi) as IBadgeDescriptorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBadgeDescriptor {
    return new Contract(address, _abi, signerOrProvider) as IBadgeDescriptor;
  }
}
