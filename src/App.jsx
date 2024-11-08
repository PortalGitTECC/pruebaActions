import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState("");

  // Función asíncrona para hacer la solicitud
  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/hello/');
      const data = await response.json();
      setMessage(data.message); // Almacenar el mensaje de la respuesta
    } catch (error) {
      console.log(error); // Manejo de errores
    }
  };

  // Llamar a la función fetchData cuando el componente se monta
  useEffect(() => {
    fetchData();
  }, []);




  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        {message} {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App