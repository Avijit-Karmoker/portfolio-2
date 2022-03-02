import "./App.css";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Do from "./components/Do/Do";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head"
import Hire from "./components/Hire/Hire";
import Portfolio from "./components/Portfolio/Portfolio";
import Review from "./components/Review/Review";
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
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
