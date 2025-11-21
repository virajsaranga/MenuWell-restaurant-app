export default function DishCard({ name, price, image }: any) {
  return (
    <div className="bg-white rounded shadow hover:scale-105 transition p-3">
      <img src={image} className="rounded h-40 w-full object-cover" />
      <h3 className="mt-3 text-xl font-bold">{name}</h3>
      <p className="text-red-600 font-semibold">Rs {price}</p>
    </div>
  );
}
