import React from 'react'
import { HolaMundo } from '../../components/hola-mundo';

const Home = () => {
  return (
    <HolaMundo saludo="Hola" onClick={() => alert("Hola soy el boton!!!")}>
      <h1>Hola soy un titulo dentro de un elemento</h1>
    </HolaMundo>
  );
}

export default Home
