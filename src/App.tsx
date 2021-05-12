import React, { Fragment } from 'react';
import { Parent, ParentTwo } from './components';
//import { Navbar } from 'react-bootstrap';
import Navbar from './components/Navbar';
// function App = ():JSX.Element => {} -> equivale a scrivere la funzione di sotto

function App() {
 
  return (
   
  <>
  <div>
    <Navbar/>
    <Parent/>
    <ParentTwo/>
</div> 
  </>
  
  );
}

export default App;
