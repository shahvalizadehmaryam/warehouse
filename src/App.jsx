import { BrowserRouter } from "react-router-dom";
import Router from "router/Router";
import TanstackQueryProvider from "./providers/TanstackQueryProvider";

function App() {
  return (
    <TanstackQueryProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </TanstackQueryProvider>
  );
}

export default App;
