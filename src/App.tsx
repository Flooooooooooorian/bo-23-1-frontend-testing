import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from "./components/AddItem";
import Gallery from "./components/Gallery";
import {Item} from "./models";

function App() {

    const [items, setItems] = useState<Item[]>([{id: "123", name: "test1"}, {id: "456", name: "test2"}])

    const addItem = (name: string) => {
        setItems((prevState) => [...prevState, {id: "1", name: name}])
    }

  return (
    <div className="App">
      <header className="App-header">
          <Gallery items={items}/>
          <AddItem addItem={addItem}/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
