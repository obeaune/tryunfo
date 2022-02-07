import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
    state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    handdleChange = ({ target }) => {
      this.setState({ [target.id]: target.value }, () => this.verifyAttr());
    }

    onSaveButtonClick = () => {
      this.setState(() => ({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
      }));
    }

  verifyAttr = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const arrStrings = [cardName, cardDescription, cardImage];
    const arrNumbers = [cardAttr1, cardAttr2, cardAttr3];
    const sum = (+cardAttr1 + +cardAttr2 + +cardAttr3);
    const max = 90;
    const sumAttr = 210;
    const minMax = arrNumbers.every((item) => item >= 0 && item <= max);

    if (arrStrings.every((item) => item !== '') && minMax && sum <= sumAttr) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handdleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
