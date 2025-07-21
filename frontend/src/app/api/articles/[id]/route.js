import { clientPromise } from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(req, { params }) {
  try {
    const { id } = params;
    
    // Verifica se o ID é válido
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid article ID' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('laurem');

    // Converte o ID para ObjectId
    const objectId = new ObjectId(id);

    // Busca o artigo pelo _id
    const article = await db.collection('articles').findOne({ _id: objectId });

    if (!article) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    // Incrementa contador de visualizações
    await db.collection('articles').updateOne(
      { _id: objectId },
      { $inc: { views: 1 } }
    );

    // Converte o _id para string para serialização
    const serializedArticle = {
      ...article,
      _id: article._id.toString(),
    };

    return NextResponse.json(serializedArticle);

  } catch (error) {
    console.error('Article fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}