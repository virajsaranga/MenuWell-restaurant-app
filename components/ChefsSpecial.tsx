import Image from "next/image";

const specials = [
  {
    id: 1,
    name: "Grilled Chicken Steak",
    description: "Juicy grilled chicken with special herbs and sauce",
    price: "Rs. 1,950",
    image: "/pictures/dish1.jpg",
  },
  {
    id: 2,
    name: "Seafood Pasta",
    description: "Creamy pasta with fresh prawns and calamari",
    price: "Rs. 2,250",
    image: "/pictures/dish2.jpg",
  },
  {
    id: 3,
    name: "Beef Burger Deluxe",
    description: "Double beef patty with cheese and crispy fries",
    price: "Rs. 1,750",
    image: "/pictures/dish3.png",
  },
];

export default function ChefsSpecial() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Chef’s Special
          </h2>
          <p className="text-gray-500 mt-3">
            Hand-picked dishes prepared fresh every day
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {dish.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {dish.description}
                </p>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-lg font-bold text-orange-600">
                    {dish.price}
                  </span>

                  <button className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-700 transition">
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
