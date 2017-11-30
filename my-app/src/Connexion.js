import React from 'react';

class Connexion extends React.Component {

	goToFormulaire = event => {
		event.preventDefault();
		const pseudo = this.boxInput.value;
	}

	render() {
		return (
			<div className="connexionBox">
				<form className="connexion" onSubmit={(e) => this.goToApp(e)} >
					<h1>Ma saisie de commandes</h1>
					<input type="text" placeholder="Nom du client" required ref={(input) => {this.boxInput = input}} />
					<button type="submit">GO</button>
				</form>
			</div>
		)
	}

}

export default Connexion;