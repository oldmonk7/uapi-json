import { AirValidationError } from '../AirErrors';

const TOKEN_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;

export default (params) => {
  if (Object.prototype.toString
      .call(params.exchangeToken) !== '[object String]'
  || params.exchangeToken.match(TOKEN_REGEX) === null) {
    throw new AirValidationError.ExchangeToken(params);
  }
};
