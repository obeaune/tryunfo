import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>

        <label htmlFor="name">
          Nome da carta:
          <input
            value={ cardName }
            id="cardName"
            type="text"
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <textarea
            value={ cardDescription }
            id="cardDescription"
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attributes">
          Atributos:
          <input
            value={ cardAttr1 }
            id="cardAttr1"
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
          />
          <input
            value={ cardAttr2 }
            id="cardAttr2"
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
          />
          <input
            value={ cardAttr3 }
            id="cardAttr3"
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image">
          Url da Imagem:
          <input
            value={ cardImage }
            onChange={ onInputChange }
            id="cardImage"
            type="text"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rare">
          Raridade:
          <select
            onChange={ onInputChange }
            value={ cardRare }
            id="cardRare"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="super-trunfo">
          <input
            onChange={ onInputChange }
            checked={ cardTrunfo }
            id="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>

        <button
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          id="button"
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>

      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
