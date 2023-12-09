import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';
export const POST = async (req) => {
  // maps body information to the right variables
  const {Id, Name, Status} = await req.json()

  try{
    // newItem goes into the database
    const taskAdded = await prisma.Tasks.create({
      data: {
        Id : Id,
        Name: Name,
        Status: Status,
      },
    })

    // response will show the new object created in database
    return Response.json(taskAdded)
  } catch(error) {
    return Response.error();
  }
}