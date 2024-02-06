import connectToDatabase from "../../../../middleware/mongoose";
import contactinfo from "@/schema/contact-info";
import { NextResponse } from 'next/server';


connectToDatabase();

export async function POST(req) {
  try {
    // Connect to the database inside the request handler

    let body = await req.json();
 
    const p = new contactinfo({
      email: body.email,
      subject: body.subject,
      message: body.message,
    });

    await p.save();
    console.log('p', p);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error saving product:", error);
    return NextResponse.json({ ok: false });
  }
}

