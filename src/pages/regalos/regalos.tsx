import { useEffect, useState, useRef, useLayoutEffect } from "react";
import ListaRegalos from "../../components/lista-regalos";
import Regalos from "../../components/todos-los-regalos";
import "./styles.css";
import RedimensionarPantalla from "../../components/redimensionar-pantalla";
import { withLayout } from "../../components/with-layout";

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

  // componente no Controlado . cuando obtenemos us valor desde el mismo DOM
  const tituloReferencia = useRef(null);

  useLayoutEffect(() => {
    console.log(tituloReferencia);
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <RedimensionarPantalla />
      <h1 className="text-3xl" ref={tituloReferencia}>
        Mis regalos
      </h1>
      <ListaRegalos regalos={regalos} agregarRegalo={agregarRegalo} />
      <Regalos totalRegalos={regalos.length} />
    </div>
  );
};

const RegalosPageWithLayout = withLayout(RegalosPage);

export default RegalosPageWithLayout;
