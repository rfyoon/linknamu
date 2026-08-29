import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

type ClickDoc = {
  _id: string;
  count: number;
};

export async function GET() {
  const client = await clientPromise;
  const docs = await client
    .db()
    .collection<ClickDoc>("clicks")
    .find({})
    .toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json(counts);
}
