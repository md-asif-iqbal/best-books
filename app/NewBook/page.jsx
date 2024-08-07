"use client"
import { useState } from 'react';
import useBooks from '../Hooks/Hook';


export default function AddedNewBooks() {

  const [title, setTitle] = useState('');
  const [longDescription, setDescription] = useState('');
  const [shortDescription, setsDescription] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('');
  const { books, setBooks } = useBooks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).substr(2, 9);
    const newBook = {
      title,
      id,
      shortDescription,
      longDescription,
      publishedDate,
      image,
      status,
    };

    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    });

    if (response.ok) {
      const addedBook = await response.json();
      setBooks([...books, addedBook]);
    } else {
      console.error('Failed to add book');
    }
  };


  return (
    <div className=''>
          <div className="max-w-xl mx-auto p-4 py-10 lg:py-32 shadow-xl px-10 mb-10">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
    
        <div className="mb-4">
          <label className="block text-gray-700">Short Description</label>
          <textarea
            value={shortDescription}
            onChange={(e) => setsDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Long Description</label>
          <textarea
            value={longDescription}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Published Date</label>
          <input
            type="date"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add Book
        </button>
      </form>
    </div>
    </div>
  )
}
