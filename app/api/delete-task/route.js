import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';
export const DELETE = async (req) => {
  const {Id} = await req.json()

  try {
      const deleteTask = await prisma.Tasks.delete({
        where: {
          Id: Id,
        }
      })
      
      return Response.json(deleteTask)
  } catch (error) {
      return Response.error()
  }
}