import React, {useState}from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [item, setItem] = useState({
    id: null,
    name: "",
    category: "Produce",
  });

  function hanldeItemChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setItem({ ...item, id: uuid(), [name]: value });
  }
  return (
    <form
      className="NewItem"
      onSubmit={(e) => {
        e.preventDefault();
        onItemFormSubmit(item);
      }}
    >
      <label>
        Name:
        <input type="text" name="name" value={item.name} onChange={hanldeItemChange} />
      </label>

      <label>
        Category:
        <select name="category" value={item.category} onChange={hanldeItemChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
