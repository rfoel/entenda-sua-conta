import COSIP from './COSIP.json';
import ICMS from './ICMS.json';

const KILOWATT_HOUR_PRICE = 0.5572;

export const findCOSIP = value =>
  COSIP.find(range => {
    const kilowattHour = (value - range.value) / 100 / KILOWATT_HOUR_PRICE;
    return kilowattHour >= range.min && kilowattHour <= range.max;
  }) || COSIP.find(range => Math.max(...COSIP.map(({ value }) => value)) === range.value);

export const calculateKilowattHour = (value, cosip) =>
  (value - cosip.value) / 100 / KILOWATT_HOUR_PRICE;

export const findICMS = value =>
  ICMS.find(range => {
    return value / 100 >= range.min && value / 100 <= range.max;
  }) || ICMS.find(range => Math.max(...ICMS.map(({ value }) => value)) === range.value);

export const calculateICMS = (value, cosip, icms) => ((value - cosip.value) * icms.value) / 100;

export const formatMoney = value =>
  (value / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export const formatNumber = (value, style) =>
  value.toLocaleString('pt-BR', {
    style,
  });
