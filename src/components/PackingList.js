import { useState } from "react";

import Item from "./Item";
export default function PackingList({
  items,
  onDelete,
  onUpdate,
  onclearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy == "input") sortedItems = items;
  if (sortBy == "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy == "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onUpdate={onUpdate}
            onDelete={onDelete}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={onclearItems}>Clear list</button>
      </div>
    </div>
  );
}
