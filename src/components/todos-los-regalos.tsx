import { useState } from "react";

interface ITodosLosRegalosProps {
  totalRegalos: number;
}

const TodosLosRegalos = ({ totalRegalos }: ITodosLosRegalosProps) => {
   const [theme, setTheme] = useState("dark");
  return (
    <>
      <p>{totalRegalos}</p>
    </>
  );
};

export default TodosLosRegalos;
