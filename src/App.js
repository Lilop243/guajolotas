
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';

function App() {
  const url = 'https://apiguappjolota.herokuapp.com/datos/'
  const [todos, setTodos] = useState ()
  //funcion 
  const fetchApi = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setTodos(responseJSON)
     

      
  }
  //huck que se engancha del componente y ejecuta la funcion al inicio
  useEffect(() => {
    fetchApi()
  }, [])
  
 
  //vamos a renderizar
  return (
    <div className='App'>
             <button>insertar nota</button>

      
     {!todos ? 'Cargando...' :
      todos.map((todo,index)=>{
        return <div>
          
<table className="table ">
  <br /><br />
        <thead>
          <tr>
          <th>id</th>
            <th>Nota</th>
            <th>Descripcion</th>
            <th>Firma</th>
            <th>Acciones</th>
          
          </tr>
        </thead>
        <tbody>
        <tr>
        <td>{todo.id}</td>
          <td>{todo.descripcion}</td>
          <td>{todo.firma}</td>
          <td>{todo.Nota}</td>
        
        <td>
        <button>editar</button>
        <button>eliminar</button>
                </td>
                </tr>
        </tbody>
      </table>
    
        </div>
      })
      }
      
     
    </div>
  );
}

export default App;
