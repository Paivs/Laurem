import { NextResponse } from "next/server";
import { clientPromise } from "@/lib/mongodb";
import * as z from "zod";
import { ObjectId } from "mongodb";

const salesSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(8),
  subject: z.enum(["budget", "partnership", "product", "other"]),
  message: z.string().min(10),
  terms: z.boolean().refine(val => val === true),
});

// Helper para pegar query params em GET
function parseQueryParams(url) {
  const searchParams = new URL(url).searchParams;
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 10;
  return { page, limit };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = salesSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: true, errors: parsed.error.errors },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("laurem");
    const salesCollection = db.collection("sales");

    const newSale = {
      ...parsed.data,
      createdAt: new Date(),
    };

    const result = await salesCollection.insertOne(newSale);

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao salvar venda:", error);
    return NextResponse.json(
      { error: true, message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { page, limit } = parseQueryParams(request.url);

    const client = await clientPromise;
    const db = client.db("laurem");
    const salesCollection = db.collection("sales");

    const totalCount = await salesCollection.countDocuments();
    const sales = await salesCollection
      .find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      data: sales,
      pagination: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit),
      },
    });
  } catch (error) {
    console.error("Erro ao buscar vendas:", error);
    return NextResponse.json(
      { error: true, message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const body = await request.json();
    const id = body.id;

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: true, message: "ID inválido para exclusão" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("laurem");
    const salesCollection = db.collection("sales");

    const result = await salesCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: true, message: "Registro não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao deletar venda:", error);
    return NextResponse.json(
      { error: true, message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
