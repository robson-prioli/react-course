import "./MyForm.css";

import {useState} from 'react';

const MyForm = ({ user }) => {

    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : null);
    const [email, setEmail] = useState(user ? user.email : null);
    const [bio, setBio] = useState(user ? user.bio : null);
    const [role, setRole] = useState(user ? user.role : null);

    const handleName = (e) => {
        setName(e.target.value);
    };

    console.log(name);
    console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
        console.log(email);
        console.log(bio);
        console.log(role);


        /* 7 - limpar formulario */

        setName("");
        setEmail("");
        setBio("");
        setRole("");
    };

  return (
    <div>
        { /* 5 - Envio de form */}
        { /* 1 - criacao de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="" placeholder="Digite o seu nome" onChange={handleName} value={name} />
            </div>

            { /* 2 - label envolvendo input */}
            <label>
                <span>E-mail</span>
                { /* 4 - simplificacao de manipulacao de state */}
                <input type="text" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}  />
            </label>

            { /* 8 - textarea */}
            <label>
                <span>Bio</span>
                <textarea name="bio" placeholder="Descricao do usuario" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>

            { /* 9 - select */}
            <label>
                <span>Função</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  );

};

export default MyForm;