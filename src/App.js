import RrethNesh from "./components/RrethNesh/rrethnesh";
import Intro from "./components/NavBar/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Njoftimet from "./components/Njoftimet/njoftimet";
import Footer from "./components/Footeri/Footeri";




function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <RrethNesh/>
     <Njoftimet/>
     <Footer/>
    

     </div>
  );
}

export default App;
