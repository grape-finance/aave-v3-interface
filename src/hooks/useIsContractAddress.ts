import { useQuery } from '@tanstack/react-query';
import { useRootStore } from 'src/store/root';
import { getProvider } from 'src/utils/marketsAndNetworksConfig';
import { useShallow } from 'zustand/shallow';

export const useIsContractAddress = (address: string, chainId?: number) => {
  const defaultChainId = useRootStore(useShallow((store) => store.currentChainId));
  const provider = getProvider(chainId ?? defaultChainId);

  return useQuery({
    queryFn: () => provider.getCode(address),
    queryKey: ['isContractAddress', address],
    enabled: address !== '',
    staleTime: Infinity,
    select: (data) => data !== '0x',
  });
};
