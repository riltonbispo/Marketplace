import AllRoutes from "./pages/AllRoutes";

import { Template } from "./components/MainComponents";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import './App.css'

function App() {
  return(
    <Template>
      <Header />
      <AllRoutes />
      <Footer />
    </Template>
  );
}

export default App;
