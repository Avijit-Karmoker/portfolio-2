import "./App.css";
import Do from "./components/Do/Do";
import Experience from "./components/Experience/Experience";
import Head from "./components/Head/Head"
import Hire from "./components/Hire/Hire";
import Portfolio from "./components/Portfolio/Portfolio";
import Working from "./components/Working/Working";

function App() {
  return (
    <div className="app">
      <Head />
      <Experience />
      <Do />
      <Working />
      <Hire />
      <Portfolio />
    </div>
  );
}

export default App;
