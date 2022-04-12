import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../client/src/context/Context";

function App() {
  const {user} = useContext(Context)
  return (
    <BrowserRouter>
    <Topbar/>
    <Routes>
      <Route path ="/" element ={<Home/>}>
        <Route index element ={<Home/>} />
      </Route>
      <Route path ="/Login" element ={<Login/>}>
        {
          user ?
          <Route index element ={<Home/>} /> :
          <Route index element ={<Login/>} />
        }
        
      </Route>
      <Route path ="/Register" element ={<Register/>}>
      {
          user ?
          <Route index element ={<Home/>} /> :
          <Route index element ={<Register/>} />
        }
      </Route>
      <Route path ="/Write" element ={<Write/>}>
      {
          user ?
          <Route index element ={<Write/>} /> :
          <Route index element ={<Register/>} />
        }
      </Route>
      <Route path ="/Settings" element ={<Settings/>}>
      {
          user ?
          <Route index element ={<Settings/>} /> :
          <Route index element ={<Register/>} />
        }
      </Route>
      <Route path ="/Single" element ={<Single/>}>
        <Route index element ={<Single/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
