import Router from "router/Router";
import TanstackQueryProvider from "./providers/TanstackQueryProvider";
import { Toaster } from "react-hot-toast";



function App() {
  return (
    <>
    <Toaster
        position="top-left"
        reverseOrder={false}
      />
      <TanstackQueryProvider>
        <Router />
      </TanstackQueryProvider>
    </>
  );
}

export default App;
