import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { NetworkConnector } from './NetworkConnector';

import PROMENADE_LOGO_URL from '../assets/svgs/logo_orange.svg';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const RPC = isMainnet
  ? {
      [ChainId.FANTOM]: 'https://rpcapi.fantom.network',
    }
  : {
      [ChainId.FANTOM_TESTNET]: 'https://rpc.testnet.fantom.network',
    };

export const network = new NetworkConnector({
  defaultChainId: isMainnet ? ChainId.FANTOM : ChainId.FANTOM_TESTNET,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        250, // fantom
      ]
    : [
        4002, // fantom testnet
      ],
});

export const walletlink = new WalletLinkConnector({
  url: 'https://rpc.ftm.tools',
  appName: 'PROMENADE',
  appLogoUrl: PROMENADE_LOGO_URL,
});
