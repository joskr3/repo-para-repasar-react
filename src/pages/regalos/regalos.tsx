import { useState } from "react";
import ListaRegalos from "../../components/lista-regalos";
import TodosLosRegalos from "../../components/todos-los-regalos";
import "./styles.css";

const RegalosPage = () => {
  const [regalos, setRegalos] = useState<string[]>([""]);

  const agregarRegalo = () => {
    const nuevoRegalo = prompt("Que deseas por navidad?");
    setRegalos([...regalos, nuevoRegalo as string]);
  };

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl">Mis regalos</h1>
      <ListaRegalos regalos={regalos} agregarRegalo={agregarRegalo} />
      <TodosLosRegalos totalRegalos={regalos.length} />
    </div>
  );
};

export default RegalosPage;
