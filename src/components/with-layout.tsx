/* eslint-disable @typescript-eslint/no-explicit-any */
// HOC
import "./styles.css";
import { useTema } from "../context/TemaContexto";

export function withLayout(Component: any) {
  return function (props: any) {
    const { tema } = useTema();
    return (
      <main className={tema === "claro" ? "bg-white" : "bg-black"}>
        <Component {...props} />
      </main>
    );
  };
}
