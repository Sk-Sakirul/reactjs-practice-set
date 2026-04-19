// src/components/CardGrid.jsx
const products = [
  "Laptop",
  "Phone",
  "Headphones",
  "Monitor",
  "Keyboard",
  "Mouse",
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((item) => (
        <div
          key={item}
          className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;