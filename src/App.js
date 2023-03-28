import "./App.scss";
import Cta from "./components/CTA/Cta";
import Footer from "./components/Footer/Footer";
import FlootingFooter from "./components/FlotingFooter/FlootingFooter";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Right from "./components/Right/Right";

function App() {
  return (
    <div className="bg-blue">
      <Header />
      <Hero />
      <Right />
      <Cta />
      <Footer />
 <FlootingFooter />
     
    </div>
  );
}

export default App;
