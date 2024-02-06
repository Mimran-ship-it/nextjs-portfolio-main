import connectToDatabase from "../../../../middleware/mongoose";
import contactinfo from "@/schema/contact-info";
import { preconnect } from "next/dist/server/app-render/entry-base";
import { NextResponse } from 'next/server';
export const dynamic='force-dynamic'
connectToDatabase()
export async function GET(){
  const data = await contactinfo.find();
  
    return NextResponse.json({ data });
  
}

