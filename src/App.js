import React from 'react';
import Navbar from './componet/Navbar';

class App extends React.Component {
  state = {
    User: '',
    button: true,
  };

  onInputChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    }, this.validar);
  };

  validar = () => {
    const { User } = this.state;
    const valor = 3;
    if (User.length >= valor) {
      this.setState({
        button: false,
      });
    }
  };

  render() {
    const { User, button } = this.state;
    return (
      <main>
        <Navbar
          User={ User }
          button={ button }
          onInputChange={ this.onInputChange }
        />
        <p>TrybeTunes</p>
      </main>
    );
  }
}

export default App;
