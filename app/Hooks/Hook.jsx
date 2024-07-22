"use client"
import { useEffect, useState } from "react";
export default function useBooks() {
  const [books, setBooks] = useState([]);
  const[loading , setLoading] =useState(true)

  useEffect(() => {
    // Simulating fetching data from an API or database
    const fetchBooks = async () => {
      const response = await fetch('/api'); // Replace with your actual data source
      const data = await response.json();
      // console.log(data);
      setLoading(false);
      setBooks(data);

    };

    fetchBooks();
  }, []);

  return [books,setBooks];
};