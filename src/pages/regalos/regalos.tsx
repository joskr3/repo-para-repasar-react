import { useEffect, useState } from "react";
import ListaRegalos from "../../components/lista-regalos";
import TodosLosRegalos from "../../components/todos-los-regalos";
import "./styles.css";
import RedimensionarPantalla from "../../components/redimensionar-pantalla";


const RegalosPage = () => {
  const [regalos, setRegalos] = useState<string[]>([""]);

  const agregarRegalo = () => {
    const nuevoRegalo = prompt("Que deseas por navidad?");
    setRegalos([...regalos, nuevoRegalo as string]);
  };

  useEffect(() => {
    console.log("1. se cargo el componente de regalos");
  }, []);

  useEffect(() => {
    if (regalos.length > 0) {
      console.log("2. tenemos regalos!!!");
    }
  }, [regalos.length]);

  useEffect(() => {
    if (regalos.length > 0) {
      console.log("3.tenemos regalos!!!");
    }
    if (regalos) {
      console.log(`4.${regalos}`);
    }
  }, [regalos, regalos.length]);

  return (
    <div className="flex flex-col gap-10">
      <RedimensionarPantalla/>
      <h1 className="text-3xl">Mis regalos</h1>
      <ListaRegalos regalos={regalos} agregarRegalo={agregarRegalo} />
      <TodosLosRegalos totalRegalos={regalos.length} />
    </div>
  );
};

export default RegalosPage;
