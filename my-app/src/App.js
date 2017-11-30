import React, { Component } from 'react';
import Header from './Header';
import Connexion from './Connexion';
import Formulaire from './Formulaire';
import CommentaireCommande from './CommentaireCommande';
import commandes from './commandes.js';
import './index.css';
import './style/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: { email: '' }
    }
  }
  commandes = {
  };

  fetchData(userEmail) {
    const API = 'http://localhost:5050/CO'
    const xhr = new XMLHttpRequest()
    xhr.open('GET', API, true);
    xhr.send()
    xhr.onload = () => {
      this.setState({
        user: { email: userEmail },
        products: JSON.parse(xhr.responseText)
      })
    }
  }

  getValidUser(userEmail) {
    this.fetchData(userEmail);
  }

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
          {
            !this.state.user.email && <Formulaire callback={this.getValidUser.bind(this)} /> || <List {...this.state} />
          }
        </div>
      </div>
    );
  }
}

export default App;

const List = props => (
  <div>
    <div>
      <h3 style={{color:'white'}}>{props.user.email.toUpperCase()}</h3>
      <CommentaireCommande />
    </div>
    <div className="scroller">
    {
      props.products.map(prod => <Item key={prod.id} item={prod}/>)
    }
    </div>
  </div>
)


const Item = props => (
  <div className="item">
    <img src={props.item['product-image-url']} alt="" />

    <a className="btn btn-success" href={props.item['product-url']}>Details</a>
    <code>Men's</code>
    <h3>{props.item['product-name']}</h3>
    <select>
      <option>#1</option>
      <option>#2</option>
      <option>#3</option>
      <option>#4</option>
      <option>#5</option>
      <option>#6</option>
    </select>

  </div>
)