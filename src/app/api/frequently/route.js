import { connectDB } from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import Frequently from "../../../../models/frequently/frequently";

// GET 
export async function GET() 
{
    try
    {
        await connectDB();
        const frequently = await Frequently.find({}).sort({ createdAt : -1 });
        return NextResponse.json(frequently, { status : 200 });
    }
    catch (error)
    {
        return NextResponse.json({ message : "Error fetching frequntly"}, { status : 500 });
    }
}

// POST
export async function POST(req)
{
    try
    {
        await connectDB();
        const { question , answer } = await req.json();

        if (!question || !answer)
        {
            return NextResponse.json({ message : "Question and answer are required"}, { status : 400 });
        }

        const newFrequently = await Frequently.create({ question , answer });
        console.log("newFrequently" , newFrequently);
        return NextResponse.json({ message : "Frequently created successfully"}, { status : 201 });
    }
    catch (error)
    {
        return NextResponse.json({ message : "Error creating frequently", error : error.message}, { status : 500 });
    }
}