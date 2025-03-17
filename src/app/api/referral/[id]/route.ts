import { prisma } from "../../../../../lib/prisma";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(request: Request, props: Props) {
  const params = await props.params;
  const data = await prisma.referral.delete({
    where: {
      id: params.id,
    },
  });

  return Response.json(data);
}

export async function PUT(request: Request, props: Props) {
  const params = await props.params;
  const body = await request.json();

  const data = await prisma.referral.update({
    where: {
      id: params.id,
    },
    data: body,
  });

  return Response.json(data);
}
