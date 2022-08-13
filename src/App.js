import {Route,Routes,BrowserRouter} from "react-router-dom";
import Login from "./Components/login"
import Register from "./Components/register";
import Body from "./Components/body";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path='/body' element={<Body/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
