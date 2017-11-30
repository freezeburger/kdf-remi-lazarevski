import React from 'react';

class Formulaire extends React.Component {

	isMailGood = e => {
		const mail = this.mail.value;
		const extensionMail = mail.substring(mail.lastIndexOf('@'));
		let isMailGood = false;
	
		if (
			extensionMail === 'supplynation.com'
		) {
			isMailGood = true;
		  return isMailGood;
		} else {
		  alert('Votre login est incorrect');
		}
	  };
	

	render() {
		return (
			<form className="connexionBox"
			onSubmit={(e) => this.isMailGood(e)}
			>

				<input className="form-control"
					required
					maxLength
			/>
				<div
					className="info"
					ref={input => this.mail = input} 
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