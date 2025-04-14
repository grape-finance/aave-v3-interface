import { useRootStore } from 'src/store/root';
import { useShallow } from 'zustand/shallow';

import { useExtendedUserSummaryAndIncentives } from './pool/useExtendedUserSummaryAndIncentives';

export const useZeroLTVBlockingWithdraw = () => {
  const currentMarketData = useRootStore(useShallow((state) => state.currentMarketData));
  const { data: userSummary } = useExtendedUserSummaryAndIncentives(currentMarketData);

  if (!currentMarketData.v3 || !userSummary) {
    return [];
  }

  const zeroLTVBlockingWithdraw: string[] = [];
  userSummary.userReservesData.forEach((userReserve) => {
    if (
      Number(userReserve.scaledATokenBalance) > 0 &&
      userReserve.reserve.baseLTVasCollateral === '0' &&
      userReserve.usageAsCollateralEnabledOnUser &&
      userReserve.reserve.reserveLiquidationThreshold !== '0'
    ) {
      zeroLTVBlockingWithdraw.push(userReserve.reserve.symbol);
    }
  });

  return zeroLTVBlockingWithdraw;
};
