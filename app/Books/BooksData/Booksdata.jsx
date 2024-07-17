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
    <div className="card-body">
      <h2 className="card-title">{book.title}</h2>
      <p>{book.shortDescription?.slice(0, 110)}</p>
      <div className="card-actions justify-center">
      <Link href={`/Books/${book.id}`}>
      <span className="btn btn-primary">Read More</span>
    </Link>
      </div>
    </div>
  </div>
    </div>
  )
}
