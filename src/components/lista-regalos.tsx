interface IListaRegalosProps {
  regalos: string[];
  agregarRegalo: React.MouseEventHandler<HTMLButtonElement>;
}

const ListaRegalos = (props: IListaRegalosProps) => {
  const { regalos, agregarRegalo } = props;

  return (
    <>
      <h2>Regalos</h2>
      <ul>
        {regalos.map((regalo) => (
          <li key={regalo}>{regalo}</li>
        ))}
      </ul>
      <button onClick={agregarRegalo}>Añadir regalo</button>
    </>
  );
};

export default ListaRegalos;
