import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";


function Tabela(props) {

    // MÉTODO DELETE
    const removerUsuario = (id) => {
        axios.delete(`https://iot.14mob.com/api-fiap/public/index.php/users/${id}`)
            .then(res => {
                alert("Usuario removido com sucesso!");
                props.pegarUsuarios();
            })
            .catch(e => console.log(e));
    }

    return (
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {props.listaUsuarios.map((usuario, index) => {
                    return (
                        <tr key={index}>
                            <td>{usuario.id}</td>
                            <td>{usuario.name}</td>
                            <td>{usuario.email}</td>
                            <td>
                                <button className="btn btn-secondary" onClick={e => props.dadosUsuario(usuario)}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                                <button className="btn btn-danger" onClick={e => removerUsuario(usuario.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default Tabela