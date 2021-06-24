import { Trans } from '@lingui/macro';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import useCurrencyCode from '../../../hooks/useCurrencyCode';
import type { RootState } from '../../../modules/rootReducer';
import { graviton_to_lotus } from '../../../util/lotus';
import FarmCard from './FarmCard';

export default function FarmCardTotallotusFarmed() {
  const currencyCode = useCurrencyCode();

  const loading = useSelector(
    (state: RootState) => !state.wallet_state.farmed_amount,
  );

  const farmedAmount = useSelector(
    (state: RootState) => state.wallet_state.farmed_amount?.farmed_amount,
  );

  const totallotusFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      const val = BigInt(farmedAmount.toString());
      return graviton_to_lotus(val);
    }
  }, [farmedAmount]);

  return (
    <FarmCard
      title={<Trans>{currencyCode} Total lotus Farmed</Trans>}
      value={totallotusFarmed}
      loading={loading}
    />
  );
}
