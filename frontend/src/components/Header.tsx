import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-pink-600 flex justify-center items-center text-center text-white py-4">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">Checkpoint frontend</h1>
        <Link href="/">Countries</Link>
      </div>
    </header>
  );
}
