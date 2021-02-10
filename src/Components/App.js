import React from 'react'
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import ItemComponent from './MainComponent/DisplayItemComponent/ItemComponent/ItemComponent';


function App() {

  return (
    <div className="App">
        <HeaderComponent /> <br/>
        <ItemComponent />
    </div>
  );
}

export default App;


