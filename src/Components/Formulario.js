import axios from "axios";

function Formulario(props) {
    // Método POST
    const salvarUsuario = () => {
        let body = {
            name: props.nome,
            email: props.email,
            password: props.senha
        };
        console.log("Tô em salvarUsuario");

        axios.post('https://iot.14mob.com/api-fiap/public/index.php/users/', body)
            .then(res => {
                if (res.status === 201) {
                    alert('Usuario cadastrado com sucesso!');
                    props.pegarUsuarios();
                }
            }).catch(error => console.log(error));
    }

    // MÉTODO PUT
    const editarUsuario = () => {
        let body = {
            name: props.nome,
            email: props.email,
            password: props.senha
        };
        console.log("Tô em editarUsuario");

        axios.put(`https://iot.14mob.com/api-fiap/public/index.php/users/${props.id}`, body)
            .then(res => {
                alert("Usuario editado com sucesso!");
                props.pegarUsuarios();
            })
            .catch(e => console.log(e));
    }

    return (

        <form className="formulario" onSubmit={(e) => {
            e.preventDefault();
            props.id ? editarUsuario() : salvarUsuario();
        }}>
            <div className="mb-3">
                <label>Nome</label>
                <input className="form-control" name="name" value={props.nome} onChange={e => props.setNome(e.target.value)} />

            </div>
            <div className="mb-3">
                <label>Email</label>
                <input className="form-control" name="email" value={props.email} onChange={e => props.setEmail(e.target.value)} />

            </div>
            <div className="mb-3">
                <label>Senha</label>
                <input className="form-control" type="password" name="password" value={props.senha} onChange={e => props.setSenha(e.target.value)} />

            </div>
            <button type="submit" className="btn btn-primary" >Cadastrar Usuário</button>
        </form>

    )
}

export default Formulario;