import { useEffect, useState } from "react";

const RedimensionarPantalla = () => {
  const [veces, setVeces] = useState(1);

  useEffect(() => {
    const manejarRedimension = () => {
      setVeces(veces + 1);
      console.log(`La ventana se ha redimensionado ${veces}`);
    };

    window.addEventListener("resize", manejarRedimension);

    // return () => {
    //   window.removeEventListener("resize", manejarRedimension);
    // };
    
  }, [veces]);

  return <p>Abre la consola y redimensiona la ventana</p>;
};

export default RedimensionarPantalla;
