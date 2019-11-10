import React, { useState } from 'react';
import { Box } from '@xstyled/styled-components';

import Title from './components/Title';
import Text from './components/Text';
import Dots from './components/Dots';
import CurrencyInput from './components/CurrencyInput';
import Button from './components/Button';

import {
  findCOSIP,
  calculateKilowattHour,
  findICMS,
  calculateICMS,
  formatMoney,
  formatNumber,
} from './utils';

export default () => {
  const [value, setValue] = useState(0);

  const [COSIP, setCOSIP] = useState(null);
  const [KWH, setKWH] = useState(null);
  const [ICMS, setICMS] = useState(null);

  const handleValueChange = value => setValue(value);

  const handleSubmit = event => {
    event.preventDefault();
    const cosip = findCOSIP(value);
    setCOSIP(cosip);
    setKWH(calculateKilowattHour(value, cosip));
    setICMS(findICMS(value));
  };

  const isCalculated = Boolean(COSIP && KWH !== null && ICMS);

  return (
    <>
      {isCalculated ? (
        <div>
          <Title mb={4}>Aqui está sua conta de energia</Title>
          <Box display="flex" justifyContent="space-between">
            <Text>kWH</Text>
            <Dots />
            <Text>
              {formatNumber(Math.round(KWH), 'decimal')}
              {` (${formatMoney(value - COSIP.value)})`}
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>COSIP</Text>
            <Dots />
            <Text>{formatMoney(COSIP.value)}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>ICMS</Text>
            <Dots />
            <Text>
              {formatNumber(ICMS.value / 100, 'percent')}
              {` (${formatMoney(calculateICMS(value, COSIP, ICMS))})`}
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={3}>
            <Text>Total</Text>
            <Dots />
            <Text>{formatMoney(value)}</Text>
          </Box>
        </div>
      ) : (
        <div>
          <Title mb={4}>Entenda sua conta de energia</Title>
          <form onSubmit={handleSubmit}>
            <CurrencyInput label={'Valor'} value={value} onValueChange={handleValueChange} />
            <Button mt={3} type="submit">
              Calcular
            </Button>
          </form>
        </div>
      )}
    </>
  );
};
