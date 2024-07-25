import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Booksdata({book}) {
  return (
    <div>
        <div className="card card-compact bg-base-100 w-full mt-5 shadow-lg">
          <figure>
            <Image className=''
              src={book.image}
              alt={book.title}
              width={250}
              height={200}
            />
          </figure>
          <div className="card-body font-mono h-[200px]">
            <h2 className="card-title font-bold text-purple-800">{book.title?.slice(0,35)}</h2>
            <p>{book.shortDescription?.slice(0, 110)}</p>
            <div className="card-actions justify-center p-2">
            <Link href={`/Books/${book.id}`} className='mt-2'>
            <span className="bg-white border-b-[3px] border-purple-500 hover:bg-slate-100  shadow-md px-8 py-2 p-1 rounded text-black ">Read More</span>
          </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
