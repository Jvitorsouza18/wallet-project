import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      // currency: '',
      // tag: '',
      // method: '',
      // tag:'',
    };
  }

  componentDidMount() {
    const { getCurrencyList } = this.props;
    getCurrencyList();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    console.log(name, value);
  }

  render() {
    const { description, value } = this.state;
    const { stateCurrencyList } = this.props;
    return (
      <div>
        <fieldset>
          <label
            htmlFor="value"
          >
            Valor
            <input
              data-testid="value-input"
              label="Valor: "
              type="text"
              onChange={ this.handleChange }
              value={ value }
              name="value"
            />
          </label>
          <label
            htmlFor="value"
          >
            Descrição
            <input
              data-testid="description-input"
              label="Descrição: "
              type="text"
              onChange={ this.handleChange }
              value={ description }
              name="description"
            />
          </label>
          <label
            htmlFor="currency-input"
          >
            Moeda:
            <select
              id="currency-input"
              name="currency"
              onChange={ this.handleChange }
            >
              <option hidden>Moeda...</option>
              { stateCurrencyList?.map((currency) => (
                <option key={ currency } value={ currency }>{ currency }</option>
              ))}
            </select>
          </label>
          <label
            htmlFor="tag"
            name="tag"
          >
            Método de Pagamento
            <select
              data-testid="method-input"
              name="method"
              onChange={ this.handleChange }
            >
              <option hidden>Método...</option>
              <option value="Dinheiro"> Dinheiro </option>
              <option value="Cartão de crédito"> Cartão de crédito </option>
              <option value="Cartão de débito"> Cartão de débito </option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria
            <select
              data-testid="tag-input"
              name="tag"
              onChange={ this.handleChange }
            >
              <option hidden>Categoria...</option>
              <option value="Alimentação"> Alimentação </option>
              <option value="Lazer"> Lazer </option>
              <option value="Trabalho"> Trabalho </option>
              <option value="Transporte"> Transporte </option>
              <option value="Saúde"> Saúde </option>
            </select>
          </label>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateCurrencyList: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyList: () => dispatch(fetchAPI()),
});

Form.propTypes = {
  getCurrencyList: propTypes.func.isRequired,
  stateCurrencyList: propTypes.arrayOf(
    propTypes.string.isRequired,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
