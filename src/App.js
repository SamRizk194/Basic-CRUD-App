import "./App.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-3 sidebar">
          <Sidebar />
        </div>
        <div className="col-9">home page</div>
      </div>
    </div>
  );
}

export default App;
