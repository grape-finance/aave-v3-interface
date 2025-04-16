import { ChainId } from '@aave/contract-helpers';
import {
  //AaveV2Avalanche,
  AaveV2Ethereum,
  /*AaveV2Fuji,
  AaveV2Polygon,
  AaveV3Arbitrum,
  AaveV3ArbitrumSepolia,
  AaveV3Avalanche,
  AaveV3Base,
  AaveV3BNB,*/
  AaveV3Ethereum,
  /* AaveV3EthereumEtherFi,
  AaveV3EthereumLido,
  AaveV3Gnosis,
  AaveV3Metis,
  AaveV3Optimism,
  AaveV3OptimismSepolia,
  AaveV3Polygon,
  AaveV3Scroll,
  AaveV3ScrollSepolia,
  AaveV3Sepolia,
  AaveV3ZkSync,*/
} from '@bgd-labs/aave-address-book';
import { ReactNode } from 'react';

// Enable for premissioned market
// import { PermissionView } from 'src/components/transactions/FlowCommons/PermissionView';
export type MarketDataType = {
  v3?: boolean;
  marketTitle: string;
  market: CustomMarket;
  // the network the market operates on
  chainId: ChainId;
  enabledFeatures?: {
    liquiditySwap?: boolean;
    staking?: boolean;
    governance?: boolean;
    faucet?: boolean;
    collateralRepay?: boolean;
    incentives?: boolean;
    permissions?: boolean;
    debtSwitch?: boolean;
    withdrawAndSwitch?: boolean;
    switch?: boolean;
  };
  permitDisabled?: boolean; // intended to be used for testnets
  isFork?: boolean;
  permissionComponent?: ReactNode;
  disableCharts?: boolean;
  subgraphUrl?: string;
  logo?: string;
  addresses: {
    LENDING_POOL_ADDRESS_PROVIDER: string;
    LENDING_POOL: string;
    WETH_GATEWAY?: string;
    SWAP_COLLATERAL_ADAPTER?: string;
    REPAY_WITH_COLLATERAL_ADAPTER?: string;
    DEBT_SWITCH_ADAPTER?: string;
    WITHDRAW_SWITCH_ADAPTER?: string;
    FAUCET?: string;
    PERMISSION_MANAGER?: string;
    WALLET_BALANCE_PROVIDER: string;
    L2_ENCODER?: string;
    UI_POOL_DATA_PROVIDER: string;
    UI_INCENTIVE_DATA_PROVIDER?: string;
    COLLECTOR?: string;
    V3_MIGRATOR?: string;
    GHO_TOKEN_ADDRESS?: string;
    GHO_UI_DATA_PROVIDER?: string;
  };
};

export enum CustomMarket {
  // v3 test networks, all v3.0.1
  proto_arbitrum_sepolia_v3 = 'proto_arbitrum_sepolia_v3',
  proto_fuji_v3 = 'proto_fuji_v3',
  proto_optimism_sepolia_v3 = 'proto_optimism_sepolia_v3',
  proto_scroll_sepolia_v3 = 'proto_scroll_sepolia_v3',
  proto_sepolia_v3 = 'proto_sepolia_v3',
  proto_base_sepolia_v3 = 'proto_base_sepolia_v3',
  // v3 mainnets
  proto_mainnet_v3 = 'proto_mainnet_v3',
  proto_optimism_v3 = 'proto_optimism_v3',
  proto_avalanche_v3 = 'proto_avalanche_v3',
  proto_polygon_v3 = 'proto_polygon_v3',
  proto_arbitrum_v3 = 'proto_arbitrum_v3',
  proto_metis_v3 = 'proto_metis_v3',
  proto_base_v3 = 'proto_base_v3',
  proto_gnosis_v3 = 'proto_gnosis_v3',
  proto_bnb_v3 = 'proto_bnb_v3',
  proto_scroll_v3 = 'proto_scroll_v3',
  proto_lido_v3 = 'proto_lido_v3',
  proto_zksync_v3 = 'proto_zksync_v3',
  proto_etherfi_v3 = 'proto_etherfi_v3',
  // v2
  proto_mainnet = 'proto_mainnet',
  proto_avalanche = 'proto_avalanche',
  proto_fuji = 'proto_fuji',
  proto_polygon = 'proto_polygon',
  // external
  // permissioned_market = 'permissioned_market',
}

const apiKey = process.env.NEXT_PUBLIC_SUBGRAPH_API_KEY;

export const marketsData: {
  [key in string]: MarketDataType;
  //[key in keyof typeof CustomMarket]: MarketDataType;
} = {
  [CustomMarket.proto_mainnet_v3]: {
    marketTitle: 'Ethereum',
    market: CustomMarket.proto_mainnet_v3,
    chainId: ChainId.mainnet,
    v3: true,
    enabledFeatures: {
      governance: false,
      staking: false,
      liquiditySwap: true,
      collateralRepay: true,
      incentives: true,
      withdrawAndSwitch: true,
      debtSwitch: true,
      switch: true,
    },
    subgraphUrl: `https://gateway-arbitrum.network.thegraph.com/api/${apiKey}/subgraphs/id/Cd2gEDVeqnjBn1hSeqFMitw8Q1iiyV9FYUZkLNRcL87g`,
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: AaveV3Ethereum.POOL,
      WETH_GATEWAY: AaveV3Ethereum.WETH_GATEWAY,
      REPAY_WITH_COLLATERAL_ADAPTER: AaveV3Ethereum.REPAY_WITH_COLLATERAL_ADAPTER,
      SWAP_COLLATERAL_ADAPTER: AaveV3Ethereum.SWAP_COLLATERAL_ADAPTER,
      WALLET_BALANCE_PROVIDER: AaveV3Ethereum.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: AaveV3Ethereum.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: AaveV3Ethereum.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: AaveV3Ethereum.COLLECTOR,
      GHO_TOKEN_ADDRESS: AaveV3Ethereum.ASSETS.GHO.UNDERLYING,
      GHO_UI_DATA_PROVIDER: AaveV3Ethereum.UI_GHO_DATA_PROVIDER,
      WITHDRAW_SWITCH_ADAPTER: AaveV3Ethereum.WITHDRAW_SWAP_ADAPTER,
      DEBT_SWITCH_ADAPTER: AaveV3Ethereum.DEBT_SWAP_ADAPTER,
    },
  },

  [CustomMarket.proto_mainnet]: {
    marketTitle: 'Ethereum',
    market: CustomMarket.proto_mainnet,
    chainId: ChainId.mainnet,
    enabledFeatures: {
      governance: false,
      staking: false,
      liquiditySwap: true,
      collateralRepay: false,
      incentives: true,
      debtSwitch: true,
      switch: true,
    },
    subgraphUrl: `https://gateway-arbitrum.network.thegraph.com/api/${apiKey}/subgraphs/id/8wR23o1zkS4gpLqLNU4kG3JHYVucqGyopL5utGxP2q1N`,
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: AaveV2Ethereum.POOL_ADDRESSES_PROVIDER,
      LENDING_POOL: AaveV2Ethereum.POOL,
      WETH_GATEWAY: AaveV2Ethereum.WETH_GATEWAY,
      REPAY_WITH_COLLATERAL_ADAPTER: AaveV2Ethereum.REPAY_WITH_COLLATERAL_ADAPTER,
      SWAP_COLLATERAL_ADAPTER: AaveV2Ethereum.SWAP_COLLATERAL_ADAPTER,
      WALLET_BALANCE_PROVIDER: AaveV2Ethereum.WALLET_BALANCE_PROVIDER,
      UI_POOL_DATA_PROVIDER: AaveV2Ethereum.UI_POOL_DATA_PROVIDER,
      UI_INCENTIVE_DATA_PROVIDER: AaveV2Ethereum.UI_INCENTIVE_DATA_PROVIDER,
      COLLECTOR: AaveV2Ethereum.COLLECTOR,
      V3_MIGRATOR: AaveV2Ethereum.MIGRATION_HELPER,
      DEBT_SWITCH_ADAPTER: AaveV2Ethereum.DEBT_SWAP_ADAPTER,
    },
  },

  [CustomMarket.proto_arbitrum_sepolia_v3]: {
    marketTitle: 'Arbitrum Sepolia',
    market: CustomMarket.proto_arbitrum_sepolia_v3,
    v3: true,
    permitDisabled: true,
    chainId: ChainId.arbitrum_sepolia,
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0xe3E7682a922E1562fB2ECE4A029b81F89a22b1d0',
      LENDING_POOL: '0x004BF8C3c47A0A1E3f26F683dDC3E2BbbE47134F',
      WETH_GATEWAY: '0x609b0408b080FeA86421f66fDb0D3ce8229f2F3b',
      FAUCET: '0x0ECca83BC602eb206CC5aCb973dd70F94473Ab85',
      WALLET_BALANCE_PROVIDER: '0x7Cad00918dab35F18Fa4Fdb0976598A1902871E9',
      // UI_POOL_DATA_PROVIDER: '0xffCa94876239dfd3f909A7d44f3139D114089216, // with priceOracle , eModeLabel
      UI_POOL_DATA_PROVIDER: '0x78684A1F421cB4eb8f7ACB9C7855af508ffE7A60',
      UI_INCENTIVE_DATA_PROVIDER: '0x94a51301623d9CF93025B5E0Fe26378e017afa57',
      L2_ENCODER: '0x283eB941249d80ABCFdB3e244BFAabd4c8C893fa',
      GHO_TOKEN_ADDRESS: '0xb13Cfa6f8B2Eed2C37fB00fF0c1A59807C585810',
    },
  },
} as const;
