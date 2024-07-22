"use client"
import useBooks from '@/app/Hooks/Hook';
import Image from 'next/image'
import React, { useEffect, useState }  from 'react'

export default function BooksDetails({params}) {
	const [books] = useBooks();
	// console.log({books}) 
  	const {id}=params;
 	const singleBook = books.filter(item => item.id === id);
	// const { image, title, publishedDate, longDescription, status } = singleBook;


  return (
    <div className=''>
	   {singleBook.map(items => (
        <>
		 <section className="dark:bg-gray-100 dark:text-gray-800 font-mono">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center shadow-xl justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<Image src={items.image} alt="books image" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" width={400}
        height={200} />
		</div>
		<div className="flex flex-col justify-center p-6 text-start  lg:max-w-4xl">
			<h1 className="text-2xl font-bold leading-none sm:text-2xl">Book Name:{items.title}
			</h1>
			<h1 className=" text-lg ">Status: {items.status}
			</h1>
			<h1 className="text-sm">Published Date:{items.publishedDate}
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Description: {items.longDescription}
			</p>

		</div>
	</div>
</section>
		</>
      ))}
    
    </div>
  )
}
