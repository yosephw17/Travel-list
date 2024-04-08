export default function Item({ item, onDelete, onUpdate }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdate(item.id)}
      />
      <span style={item.packed ? {} : { textDecoration: "line-through" }}>
        {item.quantity}
        {item.description}
      </span>
      <button
        onClick={() => {
          onDelete(item.id);
        }}
      >
        ❌{" "}
      </button>
    </li>
  );
}
