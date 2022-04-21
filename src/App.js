
import './App.css';
import KeyboardSwitcher from './KeyboardSwitcher'
import {BrowserRouter} from "react-router-dom"
import Root from "./Router/Root"

function App() {
  return (
  <BrowserRouter>
    <Root/>
    <KeyboardSwitcher />
  </BrowserRouter>
  );
}

export default App;


