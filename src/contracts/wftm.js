import { ChainId } from '@sushiswap/sdk';

import { WFTM_ABI } from './abi';
import { calculateGasMargin } from 'utils';
import useContract from 'hooks/useContract';

const WFTM_ADDRESS = {
  [ChainId.FANTOM]: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
  [ChainId.FANTOM_TESTNET]: '0x1EF81Cc9040A7bf316EeD03BcAe56EdC645E1425',
  //Wrapped fantom
};

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';
const CHAIN = isMainnet ? ChainId.FANTOM : ChainId.FANTOM_TESTNET;

export const useWFTMContract = () => {
  const { getContract } = useContract();

  const wftmAddress = WFTM_ADDRESS[CHAIN];

  const getWFTMContract = async () => await getContract(wftmAddress, WFTM_ABI);

  const getWFTMBalance = async address => {
    const contract = await getWFTMContract();
    return await contract.balanceOf(address);
  };

  const wrapFTM = async (value, from) => {
    const contract = await getWFTMContract();
    const options = {
      value,
      from,
    };
    const gasEstimate = await contract.estimateGas.deposit(options);
    options.gasLimit = calculateGasMargin(gasEstimate);

    return await contract.deposit(options);
  };

  const unwrapFTM = async value => {
    const contract = await getWFTMContract();

    return await contract.withdraw(value);
  };

  const getAllowance = async (owner, spender) => {
    const contract = await getWFTMContract();
    return await contract.allowance(owner, spender);
  };

  const approve = async (address, value) => {
    const contract = await getWFTMContract();
    const tx = await contract.approve(address, value);
    await tx.wait();
  };

  return {
    wftmAddress,
    getWFTMBalance,
    wrapFTM,
    unwrapFTM,
    getAllowance,
    approve,
  };
};
