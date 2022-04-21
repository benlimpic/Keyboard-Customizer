
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
 
import Home from "./Router/Home"
import Save from "./Router/Save"
import View from "./Router/View"
 
const App = () => {
  
    return (      
       <BrowserRouter>
        <div>
            <nav id="dislplayNav">
                <Link to="/">Home</Link>
                <Link to="/save">Save</Link>
                <Link to="/view">View</Link>
            </nav>
                <Routes>
                  <Route element={<Home/>} exact path="/" />
                  <Route element={<Save/>} exact path="/save" />
                  <Route element={<View/>} exact path="/view" />
                </Routes>
         </div> 
       </BrowserRouter>
     );
   }
 
export default App;