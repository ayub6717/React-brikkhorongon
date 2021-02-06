import './App.css';
import ControlledCarousel from './Components/HeaderComponent/ControlledCarousel';
import Header from './Components/HeaderComponent/Header';
import Product from './Components/ProductComponent/Product';


function App() {
  return (
    <div className="App">
        <Header />
        <ControlledCarousel />
        <Product /> <br/>
        
    </div>
  );
}

export default App;


