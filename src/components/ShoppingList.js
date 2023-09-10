import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [newItems, setNewItems] = useState(items);


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = newItems
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

function onSearchChange(e) {
  setSearch(e.target.value);
}

function onItemFormSubmit(newItem) {
  setNewItems((prev) => [...prev, newItem]);
}

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={search}
        onSearchChange={onSearchChange}
        onCategoryChange={handleCategoryChange}
      />      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
