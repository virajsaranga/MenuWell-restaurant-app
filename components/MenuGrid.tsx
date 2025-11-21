import DishCard from "./DishCard";

export default function MenuGrid() {
  const dishes = [
    { name: "Chicken Fried Rice", price: 1200, image: "/pictures/image1.jpeg" },
    { name: "Seafood Pasta", price: 1800, image: "/pictures/image2.jpg" },
    { name: "BBQ Pizza", price: 1500, image: "/pictures/image3.jpg" },
  ];

  return (
    <section className="max-w-6xl mx-auto p-10">
      <h2 className="text-3xl font-bold mb-6">Popular Dishes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <DishCard key={dish.name} {...dish} />
        ))}
      </div>
    </section>
  );
}
