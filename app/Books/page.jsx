"use client"
import banner from "@/public/assets/book3.jpg"
import React from 'react'
import Booksdata from './BooksData/Booksdata'
import useBooks from '../Hooks/Hook';
import Image from 'next/image';


export default function Books() {
  const [books] = useBooks();

  return (
    <div className="min-h-screen">
     <div className="">
      <Image className="w-full bg-fixed" src={banner} alt="banner"/>

        <div className="lg:mt-10 lg:mb-10  w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-20">
      {books.map(book => (
        <Booksdata key={book.id} book={book} />
      ))}
    </div>
        </div>
     </div>


    </div>
  )
}
