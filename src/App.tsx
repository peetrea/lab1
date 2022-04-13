import React from 'react';
import './App.css';
import Layout_content from "./components/Layout";
import {Overview} from "./components/Overview";
import rootStore from './mst/Provider.store';


function App() {
  const [rootStoreState, setRootStoreState] = React.useState(rootStore.getLocalStorage())
  React.useEffect(()=>{
    console.log('')
  }, [rootStoreState])
  return (
    <div className="App">
        <Layout_content
        />
        <Overview students={rootStore.students}
        />
        <button onClick={rootStore.saveToLocalStorage}>Save to LocalStorage</button>
        <br />
        <button onClick={rootStore.clearLocalStorage}>Clear LocalStorage</button>
        <br />
        <button onClick={rootStore.setLocalStorageTestData}>Set LocalStorage test data</button>
    </div>
  );
}

export default App;
