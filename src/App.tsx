import "./App.css";
import { useEffect, useState } from "react";
import Item from "./Item";

function App() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="item">
        {items.map((item, i) => (
          <Item
            img={item.img}
            key={i}
            name={item.name}
            cpu={item.cpu}
            memory={item.memory}
            storage={item.storage}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
