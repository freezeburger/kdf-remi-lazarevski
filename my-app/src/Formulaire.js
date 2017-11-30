import React from 'react';

class Formulaire extends React.Component {

	render() {
		return (
			<form className="connexionBox"
				className="form"
			>

				<textarea 
					required
					maxLength
			>
				</textarea>

				<div
					className="info"
					ref={input => this.messageInfo = input} 
				>
				</div>

				<button type="submit" >
						Se connecter
				</button>

			</form>
		)
	}
}

export default Formulaire;