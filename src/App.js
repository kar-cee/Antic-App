import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import BestSeller from './components/BestSeller/BestSeller';
import Collection from './components/Collections/Collection'
import SignUp from './components/SignUp/SignUp'
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <Hero />
      <BestSeller />
      <Collection />
      <SignUp />
      <Footer/>
    </div>

  );
}

export default App;
