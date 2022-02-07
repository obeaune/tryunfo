import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
    state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      onSaveButtonClick: true,
    };

    handdleChange = ({ target }) => {
      this.setState({ [target.id]: target.value });
    }

    render() {
      return (
        <div>
          <h1>Tryunfo</h1>
          <Form { ...this.state } onInputChange={ this.handdleChange } />
          <Card { ...this.state } />
        </div>
      );
    }
}

export default App;
