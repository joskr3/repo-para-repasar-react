import { createContext, useState, useContext, ReactNode } from "react";

type Tema = "claro" | "oscuro";

type TipoContextoTema = {
  tema: Tema;
  cambiarTema: () => void;
};

interface TemaProviderProps {
  children: ReactNode;
}

const valorInicial: TipoContextoTema = {} as TipoContextoTema;

const TemaContexto = createContext<TipoContextoTema>(valorInicial);

export const ProveedorTema = ({ children }: TemaProviderProps) => {
  const [tema, setTema] = useState<Tema>("claro");
  const cambiarTema = () => {
    setTema((anteriorTema) => (anteriorTema === "claro" ? "oscuro" : "claro"));
  };

  const { Provider } = TemaContexto;
  const value = { tema, cambiarTema };

  return <Provider value={value}>{children}</Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTema = () => {
  return useContext(TemaContexto);
};
