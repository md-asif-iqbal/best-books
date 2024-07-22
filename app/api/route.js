
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'public', 'books.json');

export async function GET() {
  const jsonData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  return NextResponse.json(data);
}

export async function POST(request) {
  try {
    const newBook = await request.json();
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    data.push(newBook);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ message: 'Book added successfully', newBook }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error adding book', error }, { status: 500 });
  }
}