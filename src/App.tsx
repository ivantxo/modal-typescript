import * as React from 'react';
import './App.css';
import Modal from './Modal/Modal';
import { StyledButton } from './Modal/styles';

const logo = require('./logo.svg');

class App extends React.Component {
  state = {
    show: false,
  };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>&nbsp;</div>
        <StyledButton onClick={this.showModal}>
          Show modal
        </StyledButton>
        <div>&nbsp;</div>
        <p>Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem
          ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum
          adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas
          Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas
          Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem
          ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum
          adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas
          Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem
          ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum
          adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas
          Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem
          ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum
          adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas
          Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem
          ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum
          adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas
          Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem
          ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum
          adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas
          Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem
          ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum
          adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas
          Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem
          ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum
          adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas
          Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem
          ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum
          adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas
          Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem
          ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum adas Lorem ipsum
          adas Lorem ipsum adas Lorem ipsum adas </p>
        <Modal
          onClose={this.showModal}
          show={this.state.show}
        >
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi
            faucibus quam, sollicitudin posuere massa lacus cursus ligula.
            Quisque vel turpis a quam posuere lobortis. Aenean risus nunc,
            pretium eu massa tincidunt, dignissim tincidunt arcu. Integer et
            mauris vestibulum, pharetra eros nec, feugiat orci.
          </p>
        </Modal>
      </div>
    );
  }
}

export default App;
