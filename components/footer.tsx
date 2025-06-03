import Link from "next/link";

export default function Footer() {
    return (
      <footer className=" text-sm py-6">
        <div className="max-w-4xl mx-auto px-4 flex flex-col justify-between items-center space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Sophia Zou
          </p>
          <div className="flex items-center space-x-4">
             <span >Built with React (Next.js) & TypeScript</span>
            <span className="hidden sm:inline">|</span>
           <a
              href="https://github.com/svzou/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-black"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </footer>
    );
  }