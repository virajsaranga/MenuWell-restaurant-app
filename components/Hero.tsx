export default function Hero() {
  return (
    <section className="h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="bg-black/50 p-10 rounded text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to MenuWell</h1>
        <p className="text-xl">Delicious food, made with love</p>
      </div>
    </section>
  );
}
