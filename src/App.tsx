import React from 'react';
import './App.css';
import Registration from './components/Registration';
import *as userData from './mockData/users.json';

function App() {
  const [appRendered, setAppRendered] = React.useState(false)
  if (!appRendered)
    if(!localStorage.getItem("lab6")){
      localStorage.setItem("lab6",JSON.stringify(userData))
    }
    
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
        <Registration/>
        </div>
        </div>
    </div>
  );
}

export default App;
