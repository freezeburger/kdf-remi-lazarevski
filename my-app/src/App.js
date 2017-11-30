import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Connexion from './Connexion';
import Formulaire from './Formulaire';
import './index.css';
import './style/css/bootstrap.css';
import './App.css';

class App extends Component {
 commandes = {
	};

	componentWillMount() {
		const localStorageText = localStorage.getItem('text');

		if (localStorageText) {
			this.setState({
				text: localStorageText
			});
		}
	}

  render() {
    return (
      <div className="App">
      <div>
        <Header />
      </div>
        <div>
          <Formulaire />
          </div>
      </div>
    );
  }
}

export default App;