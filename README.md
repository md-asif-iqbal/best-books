# Read Books

**Live Demo**  
Check out the live version of the project here: [Read Books](https://read-books-sand.vercel.app/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Live Demo](#live-demo)

## Introduction

**Read Books** is a web application built with Next.js that allows users to browse and manage a collection of books. The application includes features such as listing books, viewing detailed descriptions, and adding new books to the collection. The project is designed to demonstrate a simple, yet effective way to manage a library of books with a modern frontend framework.

## Features

- **Book Listing**: Browse a list of available books with titles, authors, and cover images.
- **Detailed View**: Click on a book to view more detailed information, including a long description and published date.
- **Add New Books**: Easily add new books to the collection via a form.
- **Responsive Design**: The application is fully responsive, ensuring a great user experience on both desktop and mobile devices.

## Technology Stack

- **Frontend**: Next.js with React for building dynamic user interfaces.
- **Styling**: Tailwind CSS for styling and ensuring a responsive design.
- **Backend**: API routes in Next.js to handle data operations such as fetching and adding books.
- **Database**: JSON file stored in the `public` directory, acting as a simple data store.
- **Deployment**: Hosted on Vercel for fast and reliable delivery.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/read-books.git
    cd read-books
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

## Usage

### Adding a New Book

1. Navigate to the "Add New Book" section.
2. Fill out the form with the book's details, including title, short description, long description, published date, and cover image URL.
3. Submit the form to add the book to the collection.

### Viewing Book Details

1. On the homepage, click on any book title or cover image.
2. You will be redirected to a detailed view of the selected book, displaying more information such as a long description and publishing date.

### Viewing All Books

1. All books are listed on the homepage, displaying their title, author, and cover image.
2. Scroll through the list to browse all available books.

## API Endpoints

The project includes API endpoints to handle data operations:

- **GET `/api/books`**: Fetches the list of all books.
- **POST `/api/books`**: Adds a new book to the collection. The request body should include details like `id`, `title`, `shortDescription`, `longDescription`, `publishedDate`, `image`, and `status`.
