//import ContadorPage from "./pages/contador/contador";
import { withLayout } from "./components/with-layout";
import Home from "./pages/home/home";
//import RegalosPage from "./pages/regalos/regalos";

function App() {
  return (
    <>
      <Home />
      {/* <ContadorPage /> */}
      {/* <RegalosPage /> */}
    </>
  );
}

const AppWithLayout = withLayout(App);

export default AppWithLayout;
