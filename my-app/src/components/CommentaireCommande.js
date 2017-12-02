import React from 'react';

class CommentaireCommande extends React.Component {

	state = {
		length: this.props.length
	}

	createMessage = event => {
		event.preventDefault();

		const message = {
			message: this.message.value
		}

		const length = this.props.length;
		this.setState({ length });
		this.messageForm.reset();
	}

	compteur = event => {
		const length = this.props.length - this.message.value.length;
		this.setState({ length });
	}


	render() {
		return (
			<form className="form"
					onSubmit={(e) => this.createMessage(e)}
					ref={(input) => this.messageForm = input} >

				<div
					className="info"
					ref={input => this.messageInfo = input}>
						{this.state.length}
				</div>

				<textarea className="form-control"
					required
					maxLength={this.props.length}
					ref={input => this.message = input}
					onChange={(e) => this.compteur(e)}
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