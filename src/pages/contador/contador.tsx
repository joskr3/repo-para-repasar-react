import { useState } from "react";
import "./styles.css";

const ContadorPage = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar en 1</button>
    </div>
  );
};

export default ContadorPage;
