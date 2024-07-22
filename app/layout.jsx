import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Read your favourite Books",
  description: "Read the famous books and you maybe interested and enjoy the story",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <div className="navbar bg-base-300 fixed z-10 backdrop-blur-sm bg-opacity-40 text-black">
        <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link href='/'  className="hover:text-rose-600 hover:border-b-2">Home</Link></li>
        <li><Link href="/Books"  className="hover:text-rose-600 hover:border-b-2 ">Books</Link></li>
        <li><Link href="/NewBook"  className="hover:text-rose-600 hover:border-b-2 ">Added New Book</Link></li>
      </ul>
    </div>
    <Link href='/' className=" cursor-pointer font-bold lg:ml-10 text-2xl uppercase">Learn somethings</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex items-center gap-8 px-1 font-bold text-xl ">
      <li><Link href='/' className="hover:text-rose-600 hover:border-b-2 ">Home</Link></li>
      <li><Link href="/Books"  className="hover:text-rose-600 hover:border-b-2 ">Books</Link></li>
      <li><Link href="/NewBook"  className="hover:text-rose-600 hover:border-b-2 ">Added New Book</Link></li>
    </ul>
  </div>

</div>
        {children}
        <footer className="footer footer-center bg-base-300 text-base-content p-10">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Asif Iqbal</p>
  </aside>
</footer>
        </body>
    </html>
  );
}
