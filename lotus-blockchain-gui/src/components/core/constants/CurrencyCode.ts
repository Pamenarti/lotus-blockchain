import { IS_MAINNET } from './constants';
import Unit from './Unit';

export default {
  [Unit.lotus]: IS_MAINNET ? 'lotus' : 'Tlotus',
};
