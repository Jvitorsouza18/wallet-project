// Coloque aqui suas actions
export const GET_USER = 'GET_USER';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const getUser = (payload) => ({ type: GET_USER, payload });
export const requestCurrencies = () => ({ type: REQUEST_CURRENCIES });
export const getCurrencies = (data, payload) => ({ type: GET_CURRENCIES, data, payload });

// const USDT = 'USDT';

export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestCurrencies());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      const currencyList = Object.keys(data);
      dispatch(getCurrencies(data, currencyList));
    } catch (error) {
      console.log(error);
    }
  };
}
