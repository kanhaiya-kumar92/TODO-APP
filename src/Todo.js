import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";

const getItemFromLocalStorage = () => {
  const itemList = JSON.parse(localStorage.getItem("todoList"));
  return itemList !== null ? itemList : [];
};

export default function Todo() {
  const [inp, setInp] = useState("");
  const [items, setItems] = useState(getItemFromLocalStorage);
  const [editTodo, setEditTodo] = useState(null);
  const [addEditToggle, setAddEditToggle] = useState(true);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(items));
  }, [items]);

  const handleInp = (event) => {
    setInp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inp === "") return;
    else if (addEditToggle) {
      console.log("add");
      setItems([...items, { id: uuidv4(), value: inp }]);
      setInp("");
    } else {
      console.log("EDit");
      setItems(
        items.map((item) => {
          if (item === editTodo) {
            return { ...item, value: inp };
          }
          return item;
        })
      );
      setInp("");
    }
  };

  return (
    <div>
      <h1>TODO App</h1>

      <Form handleSubmit={handleSubmit} inp={inp} handleInp={handleInp} />
      <br />
      <ItemList
        items={items}
        setItems={setItems}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        inp={inp}
        setInp={setInp}
        addEditToggle={addEditToggle}
        setAddEditToggle={setAddEditToggle}
      />
    </div>
  );
}
