import { db } from "../db";

export async function POST(req) {
  const body = await req.json();
  db.ratings.push(body);
  return Response.json({ success: true });
}
