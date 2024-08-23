import {useState} from 'react';

const ManageData = () => {

    const [number, setNumber] = useState(15);

  return (
    <div>
        <p>valor: {number}</p>
        <button onClick={() => setNumber(25)}>Alterar valor!</button>
    </div>
  );
}

export default ManageData;