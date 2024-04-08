import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
export default function App() {
  const [item, setitem] = useState([]);

  function addItem(item) {
    setitem((items) => [...items, item]);
  }
  function handleDelete(id) {
    setitem((items) => items.filter((item) => item.id !== id));
  }
  function handleUpdate(id) {
    setitem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearItems() {
    const confirm = window.confirm(
      "Are you sure you want to delete these items?"
    );
    if (confirm) setitem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdd={addItem} />
      <PackingList
        items={item}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
        onclearItems={clearItems}
      />
      <Stats items={item} />
    </div>
  );
}
