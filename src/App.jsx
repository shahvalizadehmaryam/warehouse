import Router from "router/Router";
import TanstackQueryProvider from "./providers/TanstackQueryProvider";
import Layout from "./layouts/Layout";

function App() {
  return (
    <TanstackQueryProvider>
      <Layout>
        <Router />
      </Layout>
    </TanstackQueryProvider>
  );
}

export default App;
