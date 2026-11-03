import "./App.css";
import { Button } from "./components/Button.jsx";

function App() {
  return <div className="App">
    <Button buttonTitle="Hello" size="large" variant="danger" round={true}/>
  </div>;
}

export default App;
