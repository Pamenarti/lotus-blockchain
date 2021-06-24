const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class lotus {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const lotus_formatter = (value, unit) => new lotus(value, unit);

lotus_formatter.convert = convert;
lotus_formatter.setDisplay = units.setDisplay;
lotus_formatter.setUnit = units.setUnit;
lotus_formatter.getUnit = units.getUnit;
lotus_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const graviton_to_lotus = (graviton) => {
  return lotus_formatter(Number.parseInt(graviton), 'graviton').to('lotus').value();
};

export const lotus_to_graviton = (lotus) => {
  return lotus_formatter(Number.parseFloat(Number(lotus)), 'lotus')
    .to('graviton')
    .value();
};

export const graviton_to_lotus_string = (graviton) => {
  return lotus_formatter(Number(graviton), 'graviton').to('lotus').toString();
};

export const graviton_to_colouredcoin = (graviton) => {
  return lotus_formatter(Number.parseInt(graviton), 'graviton')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_graviton = (colouredcoin) => {
  return lotus_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('graviton')
    .value();
};

export const graviton_to_colouredcoin_string = (graviton) => {
  return lotus_formatter(Number(graviton), 'graviton').to('colouredcoin').toString();
};
