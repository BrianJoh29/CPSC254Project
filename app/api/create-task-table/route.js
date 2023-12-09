import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export const dynamic = 'force-dynamic';
export async function GET(request) {
  try {
    const result =
      await sql`CREATE TABLE Tasks ( ID text, Name text, Status boolean );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}