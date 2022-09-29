import "./App.css";
import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter an item");
    } else {
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem,
      };

      setItems((oldList) => [...oldList, item]);

      setNewItem("");

      console.log(items);
    }
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          className="input"
          placeholder="Add text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="addBtn" onClick={addItem}>
          Add todo
        </button>
      </div>
      <div className="forTodo">
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <div>{item.value}</div>
                <button
                  className="deleteBtn"
                  onClick={() => deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
