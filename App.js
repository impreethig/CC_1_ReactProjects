import React from "react";
import {Routes,Route,Router} from "react-router-dom";
import Entry from './Components/day6/Entry';
import List from './Components/day6/List'
import Home from "./Components/day9/Home";
import Singers from "./Components/day9/Singers";
import Albums from "./Components/day9/Albums";
import Day8 from "./Components/day8";
import Day7 from "./Components/day7/day7";

function createEntry(items) {
  return (
    <Entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}

function App() {
  return (
    <div>
    <Day8/>

      <h1 style={{ textAlign:"center"}}>
         Products
      </h1>
      <dl >{List.map(createEntry)}</dl>
      
      
      <Day7/>
      
      <Home/>
      <Albums/>
      <Singers/>
    </div>
  );
}

export default App;