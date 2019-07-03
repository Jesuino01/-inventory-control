import React from "react";
import './Login.css'
import logo from '../../images/logo.svg';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { user: '', pass: '' };

		this.handleChangeUser = this.handleChangeUser.bind(this);
		this.handleChangePass = this.handleChangePass.bind(this);
	}

	goHome = () => {
		// if(this.state.user === 'admin' && this.state.pass === 'admin'){
		// 	console.log(window.location)
		// }
		console.log(window.location.host + '/home')
		// window.location = 'http://stackoverflow.com/'
		console.log(window.location.host + '/home');
	}

	handleChangeUser(event) {
		this.setState({ user: event.target.value });
	}

	handleChangePass(event) {
		this.setState({ pass: event.target.value });
	}

	render() {
		return (
			<div className="container">
				<div className="page-login">
					<div className="w-100  tc logo-login">
						<img src={logo} alt="Logo Compre Certo" height="200" width="200" />
					</div>
					<form className="login-fields">
						<div>
							<label>Usuário</label>
							<input 
								onChange={this.handleChangeUser} 
								className="w-100" 
								placeholder="Entre com o usuário" 
								id="user" 
							/>
						</div>
						<div>
							<label>Senha</label>
							<input 
								onChange={this.handleChangePass} 
								className="w-100" 
								placeholder="Entre com a senha" 
								id="pass" 
								type="password" 
							/>
							<a href="#">Esqueci minha Senha</a>
						</div>
					</form>
					<div className="tc w-100">
						<button href="/home">Entrar</button>
					</div>
					{/* <button onClick={this.goHome}>Entrar</button> */}
				</div>
			</div>
		);
	}
}

export default Login;

