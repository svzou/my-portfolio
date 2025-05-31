import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 w-full py-4">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">

        <Link href="/" className="text-2xl font-semibold">
          Sophia Zou
        </Link>
        

  
        <nav className="flex space-x-6 text-2xl font-medium">
        
          <Link href="#experience" className="hover:underline">
            Experience
          </Link>
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="#classes" className="hover:underline">
            Classes
          </Link>
        </nav>
      </div>
    </header>
  );
}
