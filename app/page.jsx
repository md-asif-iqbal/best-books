"use client"

import banner from "@/public/assets/books2.jpg"
import Image from "next/image";
import React from 'react';
import Booksdata from "./Books/BooksData/Booksdata";
import useBooks from "./Hooks/Hook";
import Link from "next/link";
export default function Home() {
  const [books] = useBooks();
  return (
    <div className="mb-5 ">
     <div className="">
      <Image className="w-full bg-fixed" src={banner} alt="banner"/>

        <div className="lg:mt-10 lg:mb-10  w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-20 items-center">
      {books?.slice().reverse().slice(0,6).map(book => (
        <Booksdata key={book.id} book={book} />
      ))}
      
    </div>
    <div className="flex  mt-10">
    <Link href="/Books" className=" mx-auto"> 
     <span className="uppercase bg-white border-b-[3px] text-center hover:bg-slate-100 border-purple-600 rounded shadow-xl px-8 py-2 p-1  ">View All</span>
     </Link>
    </div>
        </div>

     </div>
     

    </div>
  );
}
