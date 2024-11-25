import AppNavbar from "./components/AppNavbar";
import AllTask from "./pages/allTask";
import { Route,Routes } from "react-router-dom";
import Completed from "./pages/completed";
import "./App.css";
const App = () => {
  return <div className="App">
    <AppNavbar/>

    <Routes>
      <Route path="/" element={<AllTask/>}/>
      <Route path="completed" element={<Completed/>}/>
    </Routes>
  </div>;
};

export default App;
