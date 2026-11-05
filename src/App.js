import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button.jsx";

function App() {
  const [isSize, setSize] = useState("small")

  return <div className="App">
    <Button buttonTitle="Hello" size={isSize} variant="danger" round={true}/>
    <div>
      <h1>Size</h1>
      <p onClick={()=>setSize("small")}>Small</p>
      <p onClick={()=>setSize("medium")}>Medium</p>
      <p onClick={()=>setSize("large")}>Large</p>
    </div>
  </div>;
}

export default App;

