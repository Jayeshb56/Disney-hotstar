import React from 'react';
import Signin from './component/Signin';
import './App.css';
import Main from './component/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/' element={<Main />}/>
      </Routes>
      {/* <Signin /> */}
      
    
    </div>
  );
}

export default App;
