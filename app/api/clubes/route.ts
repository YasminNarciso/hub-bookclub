import { NextResponse } from "next/server";
import clubesMock from "@/mocks/clubesMock";


let clubes = [...clubesMock];


export async function GET() {
  return NextResponse.json(clubes);
}


export async function POST(request: Request) {
  const data = await request.json();

  const novoClube = {
    id: clubes.length + 1,
    ...data,
    total_favoritos: 0,
  };

  clubes.push(novoClube);

  return NextResponse.json(novoClube, { status: 201 });
}

