import { prisma } from "../../../../../lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await prisma.referral.delete({
    where: {
      id: params.id,
    },
  });

  return Response.json(data);
}
