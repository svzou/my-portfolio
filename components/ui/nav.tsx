import Link from "next/link";

export default function Nav() {
  return (
    <header className="w-full border-b py-4">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        {/* Left: Logo or Name */}
        <Link href="/" className="text-lg font-semibold font-urbanist">
          John Doe
        </Link>
        

        {/* Right: Nav Links */}
        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
