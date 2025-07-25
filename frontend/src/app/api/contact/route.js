import { NextResponse } from "next/server";
import { z } from "zod";
import { clientPromise } from "@/lib/mongodb";

// Schema de validação com Zod
const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  subject: z.string().min(2),
  message: z.string().min(5),
});

export async function POST(request) {
  
  try {
    const body = await request.json();

    // Validação dos dados
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const contact = parsed.data;

    // Conexão com o MongoDB
    const client = await clientPromise;
    const db = client.db("laurem");
    const collection = db.collection("contacts");

    // Inserção do documento
    const result = await collection.insertOne({
      ...contact,
      createdAt: new Date(),
    });

    return NextResponse.json({
      message: "Contato recebido",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Erro ao processar contato:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db("laurem");

    // Pegando parâmetros de query string
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const skip = (page - 1) * limit;

    const total = await db.collection("contacts").countDocuments();
    const contatos = await db
      .collection("contacts")
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return Response.json({
      data: contatos,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Erro ao buscar contatos:", error);
    return new Response("Erro ao buscar contatos", { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const client = await clientPromise;
    const db = client.db('laurem');
    await db.collection('contacts').deleteOne({ _id: new ObjectId(id) });
    return new Response('Contato deletado', { status: 200 });
  } catch (error) {
    console.error('Erro ao deletar contato:', error);
    return new Response('Erro ao deletar contato', { status: 500 });
  }
}