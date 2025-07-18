// app/api/articles/route.js
import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { title, description, author, content, tags, slug, date } = await req.json();
    
    const db = await connectToDatabase();
    const articles = db.collection('articles');

    const articleData = {
      title,
      description,
      author,
      content,
      tags,
      slug,
      createdAt: date ? new Date(date) : new Date(),
      updatedAt: new Date()
    };

    await articles.updateOne(
      { slug },
      { $set: articleData },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Database operation failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = await connectToDatabase();
    const articles = await db.collection('articles')
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}