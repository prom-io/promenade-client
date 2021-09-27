import { ChainId } from '@sushiswap/sdk';

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Matic',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.MOONBASE]: 'Moonbase',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.FUJI]: 'Fuji',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
};

export const Contracts = {
  [ChainId.FANTOM]: {
    auction: '0xdb404BF33c90b51176cA3db85288296B8594D134',
    sales: '0x19fD7C9B72cd944f987E0aB1FdD33fF8f68Cf87C', //Marketplace Proxy
    bundleSales: '0x0EeB6B95B52dfDFb86CcF960F8408a211555b63b', //Bundle Marketplace Proxy
    factory: '0x39B7788d6bb04d1860aaA6685F109aFD95D79Db3', //FantomNFTFactory
    privateFactory: '0x21CC778A6Ab21CBbB0ea62f0bFC7e6163C06dD75', //FantomNFTFactoryPrivate
    artFactory: '0x865AeDe044a707B9a3e127908Ad1F3f4F1086949',
    privateArtFactory: '0x1Ec3452a2A96AEd6A4513D6A036d17a6C3449551',
  },
  [ChainId.FANTOM_TESTNET]: {
    auction: '0x7dd79ECf8cC6D0ffaf50C431CCd2Ead45433942E',
    sales: '0x9719732A94252e74aF123865811Eeff6D0aDA3B9',
    bundleSales: '0x58F9d997197ACFa8Ac471d089Ffe537FA32372B9',
    factory: '0x578853B8ee8D0a3ECD4B3b5627B3838d71094f45',
    privateFactory: '0xbDFeE1383AB4D18818201E1b8Ad495402C6fb1ae',
  },
};
