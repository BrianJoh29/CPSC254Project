import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';
export const PATCH = async (req) => {
  const {Id, Name, Status} = await req.json()

  try {
      const editedTask = await prisma.Tasks.update({
        where: {
          Id: Id,
        },
        data: {
          Name: Name,
          Status: Status
        },
      })
      
      return Response.json(editedTask)
  } catch (error) {
      return Response.error()
  }
}