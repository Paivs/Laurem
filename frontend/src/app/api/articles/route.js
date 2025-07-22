// app/api/articles/route.js
import { clientPromise } from "@/lib/mongodb";
import { NextResponse } from "next/server";

// Validação básica dos dados
const validateArticleData = ({ title, content, slug }) => {
  const errors = [];

  if (!title || title.length < 5)
    errors.push("Title must be at least 5 characters");
  if (!content || content.length < 100)
    errors.push("Content must be at least 100 characters");
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) errors.push("Invalid slug format");

  return errors.length ? errors : null;
};

export async function POST(req) {
  try {
    const articleData = await req.json();

    // Validação
    const validationErrors = validateArticleData(articleData);
    if (validationErrors) {
      return NextResponse.json(
        { error: "Validation failed", details: validationErrors },
        { status: 400 }
      );
    }

    const { slug, date, ...rest } = articleData;
    const client = await clientPromise;
    const db = client.db("laurem");

    const result = await db.collection("articles").updateOne(
      { slug },
      {
        $set: {
          ...rest,
          slug,
          createdAt: date ? new Date(date) : new Date(),
          updatedAt: new Date(),
        },
      },
      { upsert: true }
    );

    return NextResponse.json(
      {
        success: true,
        operation: result.upsertedId ? "created" : "updated",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Database operation failed", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 9;

    const client = await clientPromise;
    const db = client.db();

    const [articles, total] = await Promise.all([
      db
        .collection("articles")
        .find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray(),
      db.collection("articles").estimatedDocumentCount(),
    ]);

    return NextResponse.json({
      data: articles,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles", details: error.message },
      { status: 500 }
    );
  }
}
