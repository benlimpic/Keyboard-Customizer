
import './App.css';
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
 
import Home from "./Router/Home"
import Name from "./Router/Name"
import View from "./Router/View"




const App = () => {
const [housing, setHousing] = useState("https://i.imgur.com/Ow9hmn2.png")
const [general, setGeneral] = useState("https://i.imgur.com/q6WuPAF.png")
const [highlight, setHighlight] = useState("https://i.imgur.com/KUT4Q9t.png")
const [action, setAction] = useState("https://i.imgur.com/syiJdOA.png")

function cb(e){
  e.preventDefault()
  
  const keyBoardCustomizer= {
    "name": "",
    "general": general,
    "Alternate": action,
    "Hightlight": highlight,
    "Case": housing
  }

  fetch("http://localhost:3000/saved", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(keyBoardCustomizer)
  })

} 



    return (      
       <BrowserRouter>
        <div>
            <nav id="dislplayNav">
                <Link to="/">Home</Link>
                <Link to="/name">Name</Link>
                <Link to="/view">View</Link>
            </nav>
                <Routes>
                  <Route element={<Home 
                    housing={housing} 
                    action={action} 
                    general={general} 
                    highlight={highlight}
                    setHousing={setHousing}
                    setGeneral={setGeneral} 
                    setHighlight={setHighlight}
                    setAction={setAction}
                    clickHandler={cb}/>} exact path="/" />
                  <Route element={<Name 
                    setHousing={setHousing}
                    setGeneral={setGeneral} 
                    setHighlight={setHighlight}
                    setAction={setAction}
                    />} exact path="/Name" />
                  <Route element={<View/>} exact path="/View" />
                </Routes>
         </div> 
       </BrowserRouter>
     );
}
 
export default App;