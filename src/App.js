import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import Formulario from "./Components/Formulario";
import Tabela from "./Components/Tabela";
import './style.css'

function App() {

	const [listaUsuarios, setListaUsuarios] = useState([]);

	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [id, setId] = useState('');

	const dadosUsuario = (usuario) => {
		setId(usuario.id);
		setNome(usuario.name);
		setEmail(usuario.email);
		setSenha(usuario.password);
	}

	const limparDados = () => {
		setNome('');
		setEmail('');
		setSenha('');
		setId('');
	}

	const pegarUsuarios = () => {
		axios.get("https://iot.14mob.com/api-fiap/public/index.php/users").then(response => {
			setListaUsuarios(response.data.users);
		})
		limparDados();
	}

	// MÉTODO GET
	useEffect(() => {
		pegarUsuarios();
	}, [])

	return (
		<div className="container">
			<Card titulo="Cadastro de Usuários">
				<Formulario
					nome={nome}
					setNome={setNome}
					email={email}
					setEmail={setEmail}
					senha={senha}
					setSenha={setSenha}
					id={id}
					pegarUsuarios={pegarUsuarios}
				/>
			</Card>
			<Card titulo="Lista de Usuários">
				<Tabela
					listaUsuarios={listaUsuarios}
					dadosUsuario={dadosUsuario}
					pegarUsuarios={pegarUsuarios}
				/>
			</Card>
		</div>
	);
}

export default App;
