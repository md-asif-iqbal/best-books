"use client"
import { useEffect, useState } from "react";
export default function useBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API or database
    const fetchBooks = async () => {
      const response = await fetch('/books.json'); // Replace with your actual data source
      const data = await response.json();
      console.log(data)
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return [books,setBooks];
};