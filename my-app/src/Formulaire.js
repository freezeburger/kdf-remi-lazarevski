import React from 'react';

class Formulaire extends React.Component {

	render() {
		return (
			<form className="connexionBox"
			>

				<input className="form-control"
					required
					maxLength
			/>
				<div
					className="info"
					ref={input => this.messageInfo = input} 
				>
				</div>
				<br/>
				<button type="submit" className="btn btn-primary btn-block">
						Se connecter
				</button>

			</form>
		)
	}
}

export default Formulaire;