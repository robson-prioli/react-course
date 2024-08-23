import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  let n = 5;

  let redTitle = false;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>

      {/* CSS component */}
      <MyComponent />
      <p>cudaido pq vaza o css</p>

      {/* CSS inline */}
      <p style={{ color: "blue", padding: "25px", borderTop:"2px solid red" }}>Este elemento foi estilizado na forma de line.</p>


      {/* CSS inline dinamico */}
      <h2 style={n < 5? { color: "red" } : { color: "green" }}>CSS inline dinamico.</h2>

      {/* Classe diinamica */}
      <h2 className={ redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica.</h2>

      {/* Classe modules */}
      <Title />
    </div>
  );
}

export default App;
