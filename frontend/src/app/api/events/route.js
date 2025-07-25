import { NextResponse } from "next/server";
import { z } from "zod";
import {clientPromise} from "@/lib/mongodb";

// Schema para validação no backend (igual ao frontend)
const formSchema = z.object({
  nomeCompleto: z.string().min(3),
  email: z.email(),
  telefone: z.string().min(11),
  empresa: z.string().optional(),
  servico: z.enum(["consultoria", "workshop", "palestra", "visita", "outro"]),
  data: z.string().min(1),
  horario: z.string().min(1),
  participantes: z.number().min(1),
  mensagem: z.string().min(10),
  termos: z.literal(true),
});

export async function POST(request) {
  try {
    const body = await request.json();

    // Validação com Zod
    const data = formSchema.parse(body);

    const client = await clientPromise;
    const db = client.db("laurem");

    // Adiciona campo de data de criação
    const created = {
      ...data,
      createdAt: new Date(),
    };

    await db.collection("events").insertOne(created);

    return NextResponse.json({ success: true, message: "Agendamento recebido com sucesso!" });
  } catch (error) {
    console.error("Erro ao receber agendamento:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Erro de validação", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db("laurem");
    const collection = db.collection("events");

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const total = await collection.countDocuments();
    const data = await collection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      data,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error(err);
    return new NextResponse("Erro ao buscar agendamentos", { status: 500 });
  }
}
