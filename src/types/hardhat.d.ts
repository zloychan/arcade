/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC721Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Permit__factory>;
    getContractFactory(
      name: "FeeController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeController__factory>;
    getContractFactory(
      name: "IERC721Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Permit__factory>;
    getContractFactory(
      name: "IFeeController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFeeController__factory>;
    getContractFactory(
      name: "ILoanCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILoanCore__factory>;
    getContractFactory(
      name: "IPromissoryNote",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPromissoryNote__factory>;
    getContractFactory(
      name: "PromissoryNote",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PromissoryNote__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "AccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlEnumerable__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "IAccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlEnumerable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "ERC1155Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Burnable__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "ERC721Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Pausable__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ArcadeGSCCoreVoting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArcadeGSCCoreVoting__factory>;
    getContractFactory(
      name: "ArcadeGSCVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArcadeGSCVault__factory>;
    getContractFactory(
      name: "ArcadeTreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArcadeTreasury__factory>;
    getContractFactory(
      name: "ARCDVestingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ARCDVestingVault__factory>;
    getContractFactory(
      name: "BaseVotingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseVotingVault__factory>;
    getContractFactory(
      name: "CoreVoting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CoreVoting__factory>;
    getContractFactory(
      name: "Timelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Timelock__factory>;
    getContractFactory(
      name: "ICoreVoting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICoreVoting__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ILockingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILockingVault__factory>;
    getContractFactory(
      name: "IVotingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVotingVault__factory>;
    getContractFactory(
      name: "Authorizable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Authorizable__factory>;
    getContractFactory(
      name: "AbstractMerkleRewards",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AbstractMerkleRewards__factory>;
    getContractFactory(
      name: "MerkleRewards",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleRewards__factory>;
    getContractFactory(
      name: "Storage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Storage__factory>;
    getContractFactory(
      name: "GSCVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GSCVault__factory>;
    getContractFactory(
      name: "AbstractLockingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AbstractLockingVault__factory>;
    getContractFactory(
      name: "LockingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LockingVault__factory>;
    getContractFactory(
      name: "ImmutableVestingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ImmutableVestingVault__factory>;
    getContractFactory(
      name: "IArcadeCoreVoting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArcadeCoreVoting__factory>;
    getContractFactory(
      name: "IArcadeToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArcadeToken__factory>;
    getContractFactory(
      name: "IArcadeTreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArcadeTreasury__factory>;
    getContractFactory(
      name: "IARCDVestingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IARCDVestingVault__factory>;
    getContractFactory(
      name: "IBadgeDescriptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBadgeDescriptor__factory>;
    getContractFactory(
      name: "IBaseVotingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBaseVotingVault__factory>;
    getContractFactory(
      name: "INFTBoostVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INFTBoostVault__factory>;
    getContractFactory(
      name: "IReputationBadge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IReputationBadge__factory>;
    getContractFactory(
      name: "ArcadeMerkleRewards",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArcadeMerkleRewards__factory>;
    getContractFactory(
      name: "NFTBoostVaultStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTBoostVaultStorage__factory>;
    getContractFactory(
      name: "BadgeDescriptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BadgeDescriptor__factory>;
    getContractFactory(
      name: "ReputationBadge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReputationBadge__factory>;
    getContractFactory(
      name: "NFTBoostVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTBoostVault__factory>;
    getContractFactory(
      name: "MockERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC1155__factory>;
    getContractFactory(
      name: "MockERC20Reentrancy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC20Reentrancy__factory>;
    getContractFactory(
      name: "MockERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC721__factory>;
    getContractFactory(
      name: "ArcadeAirdrop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArcadeAirdrop__factory>;
    getContractFactory(
      name: "ArcadeToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArcadeToken__factory>;
    getContractFactory(
      name: "ArcadeTokenDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArcadeTokenDistributor__factory>;

    getContractAt(
      name: "ERC721Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Permit>;
    getContractAt(
      name: "FeeController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FeeController>;
    getContractAt(
      name: "IERC721Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Permit>;
    getContractAt(
      name: "IFeeController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFeeController>;
    getContractAt(
      name: "ILoanCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILoanCore>;
    getContractAt(
      name: "IPromissoryNote",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPromissoryNote>;
    getContractAt(
      name: "PromissoryNote",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PromissoryNote>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "AccessControlEnumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlEnumerable>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "IAccessControlEnumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlEnumerable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "ERC1155Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Burnable>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "ERC721Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Pausable>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ArcadeGSCCoreVoting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArcadeGSCCoreVoting>;
    getContractAt(
      name: "ArcadeGSCVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArcadeGSCVault>;
    getContractAt(
      name: "ArcadeTreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArcadeTreasury>;
    getContractAt(
      name: "ARCDVestingVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ARCDVestingVault>;
    getContractAt(
      name: "BaseVotingVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseVotingVault>;
    getContractAt(
      name: "CoreVoting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CoreVoting>;
    getContractAt(
      name: "Timelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Timelock>;
    getContractAt(
      name: "ICoreVoting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICoreVoting>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ILockingVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILockingVault>;
    getContractAt(
      name: "IVotingVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVotingVault>;
    getContractAt(
      name: "Authorizable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Authorizable>;
    getContractAt(
      name: "AbstractMerkleRewards",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AbstractMerkleRewards>;
    getContractAt(
      name: "MerkleRewards",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleRewards>;
    getContractAt(
      name: "Storage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Storage>;
    getContractAt(
      name: "GSCVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GSCVault>;
    getContractAt(
      name: "AbstractLockingVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AbstractLockingVault>;
    getContractAt(
      name: "LockingVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LockingVault>;
    getContractAt(
      name: "ImmutableVestingVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ImmutableVestingVault>;
    getContractAt(
      name: "IArcadeCoreVoting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IArcadeCoreVoting>;
    getContractAt(
      name: "IArcadeToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IArcadeToken>;
    getContractAt(
      name: "IArcadeTreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IArcadeTreasury>;
    getContractAt(
      name: "IARCDVestingVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IARCDVestingVault>;
    getContractAt(
      name: "IBadgeDescriptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBadgeDescriptor>;
    getContractAt(
      name: "IBaseVotingVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBaseVotingVault>;
    getContractAt(
      name: "INFTBoostVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INFTBoostVault>;
    getContractAt(
      name: "IReputationBadge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IReputationBadge>;
    getContractAt(
      name: "ArcadeMerkleRewards",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArcadeMerkleRewards>;
    getContractAt(
      name: "NFTBoostVaultStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTBoostVaultStorage>;
    getContractAt(
      name: "BadgeDescriptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BadgeDescriptor>;
    getContractAt(
      name: "ReputationBadge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReputationBadge>;
    getContractAt(
      name: "NFTBoostVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTBoostVault>;
    getContractAt(
      name: "MockERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC1155>;
    getContractAt(
      name: "MockERC20Reentrancy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC20Reentrancy>;
    getContractAt(
      name: "MockERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC721>;
    getContractAt(
      name: "ArcadeAirdrop",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArcadeAirdrop>;
    getContractAt(
      name: "ArcadeToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArcadeToken>;
    getContractAt(
      name: "ArcadeTokenDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArcadeTokenDistributor>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
