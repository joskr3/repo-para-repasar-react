import { useState } from "react";
import "./styles.css";

interface IHolaMundoProps {
  saludo: string;
  children: React.ReactElement;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function HolaMundo(props: IHolaMundoProps) {
  const [miNuevoSaludo, setMiNuevoSaludo] = useState("");

  //const misAlumnosFavs = ["Pedro", "Laura", "Michel", "Ronaldihno"];

  const miObjApi = [
    {
      nombre: "Pedro",
      edad: 32,
      hobbies: ["nadar", "bailar"],
      esProfesional: true,
    },
    {
      nombre: "Laura",
      edad: 30,
      hobbies: ["cantar", "escribir"],
      esProfesional: true,
    },
    {
      nombre: "Michel",
      edad: 19,
      hobbies: ["manualidades", "dibujar"],
      esProfesional: false,
    },
  ];

  return (
    <>
      <h1 className="text-3xl bg-red-300">{props.saludo}</h1>

      {/* {misAlumnosFavs.map((alumno) => (
        <p>{alumno}</p>
      ))} */}

      {/* 
      {miObjApi.map((obj) => (
        <div className={obj.esProfesional ? "bg-amber-300" : "bg-rose-600"}>
          <h1>Hola soy {obj.nombre}</h1>
          <p>Mi edad es:{obj.edad} </p>
          {obj.hobbies.map((hobbie) => (
            <p className="text-2xl text-black">{hobbie}</p>
          ))}
        </div>
      ))} */}

      {/* comentarios => ctrl + k + c -> comentar
      ctrl + k + u -> descomentar */}

      <button className="bg-green-400 w-28 h-28" onClick={props.onClick}>
        Hola, hazme click
      </button>

      {miObjApi.map(({ esProfesional, nombre, edad, hobbies }, index) => (
        <div
          key={`${index}-${nombre}`}
          className={esProfesional ? "bg-amber-300" : "bg-rose-600"}
        >
          <h1 id={`${index}-${nombre}`}>Hola soy {nombre}</h1>
          <p>Mi edad es:{edad} </p>
          {hobbies.map((hobbie, index) => (
            <p key={index} className="text-2xl text-black">
              {hobbie}
            </p>
          ))}
        </div>
      ))}

      {props.saludo === "Hola" ? (
        <p>
          Es un saludo que viene desde una condicional de un operador ternario{" "}
        </p>
      ) : null}

      <p>Hola mundo</p>
      <p>Hola mundo</p>
      <p>Hola mundo</p>
      <p>Hola mundo</p>
      <p>{miNuevoSaludo}</p>

      <button
        onClick={() => {
          setMiNuevoSaludo("Este es un saludo por defecto");
        }}
      >
        Cambiar saludo
      </button>
      <div>{props.children}</div>

      <Input initialValue="Valor inicial" />
    </>
  );
}
const Input = ({ initialValue = "" }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <section>
      <label htmlFor="input">Label</label>
      <input
        name="input"
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Saludo"
      />
    </section>
  );
};

// function MyAchorTag() {
//   return (
//     <a className="misEstilos" href="/mi-ruta">
//       Mi ruta
//     </a>
//   )
// }

// <MyAchorTag/>

// const miElemento = document.createElement('a')

// miElemento.href = "/nueva-ruta"

// miElemento.style = "color:blue"

// body.appendChild(miElemento)
