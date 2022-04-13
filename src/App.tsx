
import React from 'react';
import './App.css';
import Layout_content from "./components/Layout"
import {StudenOverview} from "./components/Overview"


const infoStudent = [
  {
    firstName: "Petru",
    secondName:"Cristea",
    gender:"male",
    age:21,
    height:200,
    university: "UTM",
    speciality:"RM",
  },
  {
    firstName: "Rusnac",
    secondName:"Sandu",
    gender:"male",
    age:13,
    height:30,
    university: "Hogwarts",
    speciality:"Slytherin",

  },
  {
    firstName: "Jimbei",
    secondName:"Alexandru",
    gender:"male",
    age:22,
    height:180,
    university: "UTM",
    speciality:"RM",
  }
]

function App() {
  return (
    <div className="App">
        <Layout_content
        />
        <StudenOverview 
        students = {infoStudent}
        />
    </div>
  );
}

export default App;
