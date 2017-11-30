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

         {/*  <List /> */}
        </div>
      </div>
    );
  }
}

export default App;

const List = props => (
  <div>
    <div>
      <CommentaireCommande />
    </div>
    <div className="scroller">
      <div className="item">
        <img src="http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png" alt="" />

        <a className="btn btn-success" href="http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html">Details</a>
        <code>Men's</code>
        <h3>MEN'S BETTER THAN NAKED&trade; JACKET</h3>
        <select>
          <option>#1</option>
          <option>#2</option>
          <option>#3</option>
          <option>#4</option>
          <option>#5</option>
          <option>#6</option>

        </select>

      </div>

      <div className="item">
        <img src="http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png" alt="" />

        <a className="btn btn-success" href="http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html">Details</a>
        <code>Men's</code>
        <h3>MEN'S BETTER THAN NAKED&trade; JACKET</h3>
        <select>
          <option>#1</option>
          <option>#2</option>
          <option>#3</option>
          <option>#4</option>
          <option>#5</option>
          <option>#6</option>

        </select>

      </div>
    </div>
  </div>
)