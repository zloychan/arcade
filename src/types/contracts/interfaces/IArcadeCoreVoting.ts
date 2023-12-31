/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace IArcadeCoreVoting {
  export type VoteStruct = {
    votingPower: PromiseOrValue<BigNumberish>;
    castBallot: PromiseOrValue<BigNumberish>;
  };

  export type VoteStructOutput = [BigNumber, number] & {
    votingPower: BigNumber;
    castBallot: number;
  };
}

export interface IArcadeCoreVotingInterface extends utils.Interface {
  functions: {
    "approvedVaults(address)": FunctionFragment;
    "changeExtraVotingTime(uint256)": FunctionFragment;
    "changeVaultStatus(address,bool)": FunctionFragment;
    "execute(uint256,address[],bytes[])": FunctionFragment;
    "getProposalVotingPower(uint256)": FunctionFragment;
    "proposal(address[],bytes[],address[],bytes[],uint256,uint8)": FunctionFragment;
    "quorums(address,bytes4)": FunctionFragment;
    "setCustomQuorum(address,bytes4,uint256)": FunctionFragment;
    "setDefaultQuorum(uint256)": FunctionFragment;
    "setLockDuration(uint256)": FunctionFragment;
    "setMinProposalPower(uint256)": FunctionFragment;
    "vote(address[],bytes[],uint256,uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approvedVaults"
      | "changeExtraVotingTime"
      | "changeVaultStatus"
      | "execute"
      | "getProposalVotingPower"
      | "proposal"
      | "quorums"
      | "setCustomQuorum"
      | "setDefaultQuorum"
      | "setLockDuration"
      | "setMinProposalPower"
      | "vote"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approvedVaults",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeExtraVotingTime",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeVaultStatus",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalVotingPower",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposal",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "quorums",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCustomQuorum",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultQuorum",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setLockDuration",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinProposalPower",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "approvedVaults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeExtraVotingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeVaultStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProposalVotingPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quorums", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCustomQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLockDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinProposalPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;

  events: {
    "ProposalCreated(uint256,uint256,uint256,uint256)": EventFragment;
    "ProposalExecuted(uint256)": EventFragment;
    "Voted(address,uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Voted"): EventFragment;
}

export interface ProposalCreatedEventObject {
  proposalId: BigNumber;
  created: BigNumber;
  execution: BigNumber;
  expiration: BigNumber;
}
export type ProposalCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  ProposalCreatedEventObject
>;

export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;

export interface ProposalExecutedEventObject {
  proposalId: BigNumber;
}
export type ProposalExecutedEvent = TypedEvent<
  [BigNumber],
  ProposalExecutedEventObject
>;

export type ProposalExecutedEventFilter =
  TypedEventFilter<ProposalExecutedEvent>;

export interface VotedEventObject {
  voter: string;
  proposalId: BigNumber;
  vote: IArcadeCoreVoting.VoteStructOutput;
}
export type VotedEvent = TypedEvent<
  [string, BigNumber, IArcadeCoreVoting.VoteStructOutput],
  VotedEventObject
>;

export type VotedEventFilter = TypedEventFilter<VotedEvent>;

export interface IArcadeCoreVoting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IArcadeCoreVotingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approvedVaults(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    changeExtraVotingTime(
      _extraVoteTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeVaultStatus(
      vault: PromiseOrValue<string>,
      isValid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    execute(
      proposalId: PromiseOrValue<BigNumberish>,
      targets: PromiseOrValue<string>[],
      calldatas: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getProposalVotingPower(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber, BigNumber]]>;

    proposal(
      votingVaults: PromiseOrValue<string>[],
      extraVaultData: PromiseOrValue<BytesLike>[],
      targets: PromiseOrValue<string>[],
      calldatas: PromiseOrValue<BytesLike>[],
      lastCall: PromiseOrValue<BigNumberish>,
      ballot: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    quorums(
      target: PromiseOrValue<string>,
      functionSelector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setCustomQuorum(
      target: PromiseOrValue<string>,
      selector: PromiseOrValue<BytesLike>,
      quorum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDefaultQuorum(
      quorum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLockDuration(
      _lockDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinProposalPower(
      _minProposalPower: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vote(
      votingVaults: PromiseOrValue<string>[],
      extraVaultData: PromiseOrValue<BytesLike>[],
      proposalId: PromiseOrValue<BigNumberish>,
      ballot: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approvedVaults(
    vault: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  changeExtraVotingTime(
    _extraVoteTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeVaultStatus(
    vault: PromiseOrValue<string>,
    isValid: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  execute(
    proposalId: PromiseOrValue<BigNumberish>,
    targets: PromiseOrValue<string>[],
    calldatas: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getProposalVotingPower(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  proposal(
    votingVaults: PromiseOrValue<string>[],
    extraVaultData: PromiseOrValue<BytesLike>[],
    targets: PromiseOrValue<string>[],
    calldatas: PromiseOrValue<BytesLike>[],
    lastCall: PromiseOrValue<BigNumberish>,
    ballot: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  quorums(
    target: PromiseOrValue<string>,
    functionSelector: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setCustomQuorum(
    target: PromiseOrValue<string>,
    selector: PromiseOrValue<BytesLike>,
    quorum: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDefaultQuorum(
    quorum: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLockDuration(
    _lockDuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinProposalPower(
    _minProposalPower: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vote(
    votingVaults: PromiseOrValue<string>[],
    extraVaultData: PromiseOrValue<BytesLike>[],
    proposalId: PromiseOrValue<BigNumberish>,
    ballot: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approvedVaults(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    changeExtraVotingTime(
      _extraVoteTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeVaultStatus(
      vault: PromiseOrValue<string>,
      isValid: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    execute(
      proposalId: PromiseOrValue<BigNumberish>,
      targets: PromiseOrValue<string>[],
      calldatas: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    getProposalVotingPower(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    proposal(
      votingVaults: PromiseOrValue<string>[],
      extraVaultData: PromiseOrValue<BytesLike>[],
      targets: PromiseOrValue<string>[],
      calldatas: PromiseOrValue<BytesLike>[],
      lastCall: PromiseOrValue<BigNumberish>,
      ballot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    quorums(
      target: PromiseOrValue<string>,
      functionSelector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setCustomQuorum(
      target: PromiseOrValue<string>,
      selector: PromiseOrValue<BytesLike>,
      quorum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setDefaultQuorum(
      quorum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLockDuration(
      _lockDuration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinProposalPower(
      _minProposalPower: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    vote(
      votingVaults: PromiseOrValue<string>[],
      extraVaultData: PromiseOrValue<BytesLike>[],
      proposalId: PromiseOrValue<BigNumberish>,
      ballot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "ProposalCreated(uint256,uint256,uint256,uint256)"(
      proposalId?: null,
      created?: null,
      execution?: null,
      expiration?: null
    ): ProposalCreatedEventFilter;
    ProposalCreated(
      proposalId?: null,
      created?: null,
      execution?: null,
      expiration?: null
    ): ProposalCreatedEventFilter;

    "ProposalExecuted(uint256)"(proposalId?: null): ProposalExecutedEventFilter;
    ProposalExecuted(proposalId?: null): ProposalExecutedEventFilter;

    "Voted(address,uint256,tuple)"(
      voter?: PromiseOrValue<string> | null,
      proposalId?: PromiseOrValue<BigNumberish> | null,
      vote?: null
    ): VotedEventFilter;
    Voted(
      voter?: PromiseOrValue<string> | null,
      proposalId?: PromiseOrValue<BigNumberish> | null,
      vote?: null
    ): VotedEventFilter;
  };

  estimateGas: {
    approvedVaults(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeExtraVotingTime(
      _extraVoteTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeVaultStatus(
      vault: PromiseOrValue<string>,
      isValid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    execute(
      proposalId: PromiseOrValue<BigNumberish>,
      targets: PromiseOrValue<string>[],
      calldatas: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getProposalVotingPower(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposal(
      votingVaults: PromiseOrValue<string>[],
      extraVaultData: PromiseOrValue<BytesLike>[],
      targets: PromiseOrValue<string>[],
      calldatas: PromiseOrValue<BytesLike>[],
      lastCall: PromiseOrValue<BigNumberish>,
      ballot: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    quorums(
      target: PromiseOrValue<string>,
      functionSelector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setCustomQuorum(
      target: PromiseOrValue<string>,
      selector: PromiseOrValue<BytesLike>,
      quorum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDefaultQuorum(
      quorum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLockDuration(
      _lockDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinProposalPower(
      _minProposalPower: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vote(
      votingVaults: PromiseOrValue<string>[],
      extraVaultData: PromiseOrValue<BytesLike>[],
      proposalId: PromiseOrValue<BigNumberish>,
      ballot: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approvedVaults(
      vault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeExtraVotingTime(
      _extraVoteTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeVaultStatus(
      vault: PromiseOrValue<string>,
      isValid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      proposalId: PromiseOrValue<BigNumberish>,
      targets: PromiseOrValue<string>[],
      calldatas: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getProposalVotingPower(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposal(
      votingVaults: PromiseOrValue<string>[],
      extraVaultData: PromiseOrValue<BytesLike>[],
      targets: PromiseOrValue<string>[],
      calldatas: PromiseOrValue<BytesLike>[],
      lastCall: PromiseOrValue<BigNumberish>,
      ballot: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    quorums(
      target: PromiseOrValue<string>,
      functionSelector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setCustomQuorum(
      target: PromiseOrValue<string>,
      selector: PromiseOrValue<BytesLike>,
      quorum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDefaultQuorum(
      quorum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLockDuration(
      _lockDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinProposalPower(
      _minProposalPower: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vote(
      votingVaults: PromiseOrValue<string>[],
      extraVaultData: PromiseOrValue<BytesLike>[],
      proposalId: PromiseOrValue<BigNumberish>,
      ballot: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
