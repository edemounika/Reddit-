import React from 'react';
// import './App.css';
import RemoteJsonData from './RemoteJsonData';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <React.Fragment>
      < Header />
      <RemoteJsonData />
      <Footer/>
      </React.Fragment>
      
      
    </div>
  );
}

export default App;



