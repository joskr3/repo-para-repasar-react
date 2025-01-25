interface ITodosLosRegalosProps {
  totalRegalos: number;
}

const TodosLosRegalos = ({ totalRegalos }: ITodosLosRegalosProps) => {
  
  return (
    <>
      <p>{totalRegalos}</p>
    </>
  );
};

export default TodosLosRegalos;
