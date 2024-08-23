import {useState} from 'react';

const ListRender = () => {

    const [list] = useState(["Mateus", "Pedro", "outro"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Mat", age: 31},
        {id: 2, name: "Ped", age: 22},
        {id: 3, name: "Pedo", age: 33}
    ]);

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * users.length);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

  return (
    <div>
        <ul>
            {
                list.map((item, i) => ( <li key={i}>{item}</li> ))
            }
        </ul>

        <ul>
            {
                users.map((user) => ( <li key={user.id}>{user.name}</li> ))
            }
        </ul>

        <button onClick={deleteRandom}>Delete random user!</button>
    </div>
  );
}

export default ListRender;