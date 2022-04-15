import React from 'react';
import './App.css';
import {Overview} from "./components/Overview";
import rootStore from './mst/Provider.store';


function App() {
  const [rootStoreState] = React.useState(rootStore.getLocalStorage())
  React.useEffect(()=>{
    console.log('')
  }, [rootStoreState])


  return (
    <div className="App">
        <Overview masini={rootStore.masini}
        />
        <button onClick={rootStore.saveToLocalStorage}>Save to LocalStorage</button>
        <br />
        <button onClick={rootStore.clearLocalStorage}>Clear LocalStorage</button>
        <br />
        <button onClick={rootStore.setLocalStorageTestData}>Set LocalStorage test data</button>
        <br />
        
    </div>
  );
}

export default App;
