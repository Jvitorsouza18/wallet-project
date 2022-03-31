// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  console.log(action.payload);
  switch (action.type) {
  case 'REQUEST_CURRENCIES':
    return {
      ...state,
    };
  case 'GET_CURRENCIES':
    return {
      currencies: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
