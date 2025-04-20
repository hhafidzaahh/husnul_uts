import { db } from "../db";

export async function GET() {
  return Response.json(db);
}
