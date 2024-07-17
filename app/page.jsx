"use client"

import banner from "@/public/assets/books2.jpg"
import Image from "next/image";
import React from 'react';
import Booksdata from "./Books/BooksData/Booksdata";
import useBooks from "./Hooks/Hook";
export default function Home() {
  const [books] = useBooks();
  return (
    <div className="min-h-screen">
     <div className="">
      <Image className="w-full bg-fixed" src={banner} alt="banner"/>

        <div className="lg:mt-10 lg:mb-10  w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-20">
      {books.slice(0,6).map(book => (
        <Booksdata key={book.id} book={book} />
      ))}
    </div>
        </div>
     </div>


    </div>
  );
}
