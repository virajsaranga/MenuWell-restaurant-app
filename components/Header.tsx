import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-red-600">MenuWell</h1>

        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/reserve">Reserve</Link>
        </nav>
      </div>
    </header>
  );
}
