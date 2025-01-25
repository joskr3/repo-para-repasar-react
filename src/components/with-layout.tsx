/* eslint-disable @typescript-eslint/no-explicit-any */
// HOC
import "./styles.css";
export function withLayout(Component: any) {
  return function (props: any) {
    return (
      <main className="bg-amber-300">
        <section>
          <Component {...props} />
        </section>
      </main>
    );
  };
}
