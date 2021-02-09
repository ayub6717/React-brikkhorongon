import React from 'react'
import './App.css';
import Controlled from './Components/HeaderComponent/ControlledCarousel';
import Header from './Components/HeaderComponent/Header';
import Product from './Components/ProductComponent/Product';


// export const ImgContext = React.createContext();
// export const TextContext = React.createContext();




function App() {
  return (
    <div className="App">
        <Header /> 
        <Controlled /> <br/>
        {/* <ImgContext.Provider value={"Indor Plant"}>
          <TextContext.Provider value={"Hi iam rohan. i,m the owner of brikkhorongon"}>
            <Product /> 
            <Product /> 
          </TextContext.Provider>
        </ImgContext.Provider> */}

        
        <React.Fragment >
          <Product  /> 
        </React.Fragment>

    </div>
  );
}

export default App;


