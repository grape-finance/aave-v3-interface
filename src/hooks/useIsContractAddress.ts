import { useQuery } from '@tanstack/react-query';
import { useRootStore } from 'src/store/root';
import { getProvider } from 'src/utils/marketsAndNetworksConfig';

import { ProviderWithSend } from '../components/transactions/GovVote/temporary/VotingMachineService';

export const useIsContractAddress = (address: string, chainId?: number) => {
  const defaultChainId = useRootStore((store) => store.currentChainId);
  let p: ProviderWithSend | undefined;
  try {
    p = getProvider(chainId ?? defaultChainId);
  } catch (e) {
    console.error('wallet misconfiguration, unknown chain ID configured', chainId, defaultChainId);
  }
  const provider = p;

  return useQuery({
    queryFn: () => (provider ? provider.getCode(address) : Promise.resolve('0x')),
    queryKey: ['isContractAddress', address],
    enabled: true,
    staleTime: Infinity,
    select: (data) => data !== '0x',
  });
};
