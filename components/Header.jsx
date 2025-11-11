
import Link from 'next/link'
export default function Header(){
  return (
    <header className="py-6 px-8 border-b border-transparent">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">

          <img src="/logo.png" alt="AHAM Fashion" className="h-10 w-auto" />
          <span className="text-xl font-semibold">AHAM Fashion</span>

        </Link>
        <nav>
          <Link href="/admin" className="mr-6">Admin</Link>
          <Link href="/cart" className="px-4 py-2 rounded-full border">Cart</Link>
        </nav>
      </div>
    </header>
  );
}
