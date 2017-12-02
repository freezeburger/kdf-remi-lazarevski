import React from 'react';

class Formulaire extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isMailGood: false,
			isMailChecked: false,
		};
	}

	isMailGood = e => {
		e.preventDefault();

		const mail = this.mail.value;
		const extensionMail = mail.substring(mail.lastIndexOf('@'));
		let isMailGood = false;


		isMailGood = (extensionMail === '@supplynation.com') ? true : false;

		this.setState({
			isMailGood: isMailGood,
			isMailChecked: true,
		})

		if(isMailGood){
			this.props.callback(mail)
		}
	};


	render() {
		return (
			<div>{
				!this.state.isMailGood && this.state.isMailChecked && <div className="alert alert-info">
					Votre Email est Incorrect !
				</div>
			}
				<form className="connexionBox"
					onSubmit={(e) => this.isMailGood(e)}
				>

					<input className="form-control"
						required
						ref={input => this.mail = input}
					/>

					<br />
					<button type="submit" className="btn btn-primary btn-block">
						Se connecter
				</button>
				</form>
			</div>
		)
	}
}

export default Formulaire;