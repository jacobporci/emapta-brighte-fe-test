import { prisma } from "../../../../lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const data = await prisma.referral.create({
    data: body,
  });

  return Response.json(data);
}

export async function GET() {
  const data = await prisma.referral.findMany();

  return Response.json(data);
}
