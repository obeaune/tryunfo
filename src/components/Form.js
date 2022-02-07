import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>

        <label htmlFor="name">
          Nome:
          <input id="name" type="text" data-testid="name-input" />
        </label>

        <label htmlFor="description">
          Descrição:
          <textarea id="description" data-testid="description-input" />
        </label>

        <label htmlFor="attributes">
          Atributos:
          <input type="number" data-testid="attr1-input" />
          <input type="number" data-testid="attr2-input" />
          <input type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="image">
          Url da Imagem:
          <input id="image" type="text" data-testid="image-input" />
        </label>

        <label htmlFor="rare">
          Raridade:
          <select id="rare" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="super-trunfo">
          <input id="super-trunfo" type="checkbox" data-testid="trunfo-input" />
        </label>

        <button id="button" type="submit" data-testid="save-button">Salvar</button>

      </div>
    );
  }
}

export default Form;
