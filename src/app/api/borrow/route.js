// import { Borrow } from "../../../../models/borrow/borrow";
import { connectDB } from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import Borrow from "../../../../models/borrow/borrow";

// GET
export async function GET() {
    try 
    {
        await connectDB();
        const borrows = await Borrow.find({}).sort({ createdAt : -1 });
        return NextResponse.json(borrows , { status : 200 });
    }
    catch (error) 
    {
        return NextResponse.json({ message : "Error fetching borrow" , error: error.message } , { status : 500 });
    }
}

// POST
export async function POST(req) 
{
   try
   {
    await connectDB();
    const { title , description } = await req.json();

    if(!title || !description)
    {
       return NextResponse.json({ message : "Title and description are required" } , { status : 400 });
    }

    const newBorrow = await Borrow.create({ 
    title, 
    description, 
    });

    console.log("newBorrow" , newBorrow);
    return NextResponse.json({ message : "Borrow created successfully" , data : newBorrow } , { status : 201 });
   }
   catch (error)
   {
     return NextResponse.json({ message : "Error creating borrow" , error : error.message} , { status : 500 });
   }
}