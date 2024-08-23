import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './CarDetails';
import Fragment from './Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  //const name = "Matheus";

  const [username] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: true, km: 4500},
    {id: 3, brand: "Reault", color: "Azul", newCar: true, km: 10000}
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avancando em react!</h1>

      {/* image em public - pode ser acessado diretamente */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* image em asset */}
      <div>
        <img src={City} alt="Paisagem" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props */}
      <ShowUserName name={username} />

      {/* destructuring */}
      <CarDetails brand="VW" km={10000} color="Azul"  newCar={false} />

      {/* reaproveitamento */}
      <CarDetails brand="Ford" km={10000} color="Branco" newCar={true} />

      {/* loop obj */}
      {
        cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
        ))
      }

      {/* fragment */}
      <Fragment />

      {/* childen */}
      <Container myValue="testing">
        <p>Este é o coneteudo</p>
      </Container>

      {/* execultar funcao */}
      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
