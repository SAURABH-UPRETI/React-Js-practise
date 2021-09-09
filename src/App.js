import "./App.css";
import Props from "./Props";

function App() {
  return (
    <div className=" container App">
      <h2 className="my-3">PROPS EXAMPLE</h2>
      <hr/>
      <div className="container props">
        <Props heading="PROPS" />
      </div>
    </div>
  );
}

export default App;
