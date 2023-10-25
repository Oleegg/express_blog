import "./App.css";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <div className="content">
      <header className="header">
        <div className="container">
          <Navbar />
        </div>
      </header>
    </div>
  );
}

export default App;
