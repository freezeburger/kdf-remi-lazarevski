import React from 'react';

class CommentaireCommande extends React.Component {

	render() {
		return (
			<form className="form">
				<textarea className="form-control"
					required
					placeholder="Votre commentaire ">

				</textarea>

				<button type="submit" className="btn btn-primary btn-block">
						Valider la commande
				</button>

			</form>
		)
	}
}

export default CommentaireCommande;