import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2">test</div>
        <div className="col-10">test2</div>
      </div>
    </div>
  );
}

export default App;
