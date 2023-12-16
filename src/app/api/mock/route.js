import { NextResponse } from "next/server";

const mockData = {
    "Name" : "Jimmy",
    "Phone" :  1234
}

export async function GET() {
    const res = mockData
    return NextResponse.json(res)
}

export async function POST(request) {
    const message = await request.text(); // Read the request body as text
    console.log(`Received message: ${message}`);
    // ...Process the message...
    return NextResponse.json({ message: 'Post request received!' }, { status: 200 });
  }