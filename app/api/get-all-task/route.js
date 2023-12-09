import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';
export const GET = async () => {
  try{
    const taskList = await prisma.Tasks.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return Response.json(taskList)
  } catch(error) {
    return Response.error();
  }
}