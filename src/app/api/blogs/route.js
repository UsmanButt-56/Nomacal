import { NextResponse } from 'next/server';
import { connectDB } from '../../../../lib/mongodb';
import Blog from '../../../../models/blog/blog';

// GET
export async function GET() {
    try
    {
       await connectDB();
       const blogs = await Blog.find({}).sort({ createdAt : -1 });
       return NextResponse.json(blogs , { status : 200 });
    }
    catch (error)
    {
        return NextResponse.json({ message : "Error fetching blogs" , error: error.message } , { status : 500 });
    }
}

// POST
export async function POST(req) {
    try 
    {
       await connectDB();
       const { title , description , image } = await req.json();

       //validation
       if(!title || !description || !image)
       {
         return NextResponse.json({ message : "Title and description are required" } , { status : 400 });
       }

       const newBlog = await Blog.create({
        title,
        description,
        image,
       });

       return NextResponse.json({message : "Blog created successfully" , data : newBlog} , { status : 201 });
    }
    catch (error)
    {
        return NextResponse.json({ message : "Error creating blogs" , error: error.message } , { status : 500 });
    }
}


// export async function GET() {
//     const blogs = [
//         {
//             _id : "1",
//             title : "Bitcoin: A Strategic Reserve for Business Continuity in Critical Moments",
//             desc : "In today’s rapidly evolving business environment, companies must be prepared for unforeseen disruptions, especially in their financial operations."
//         },
//         {
//             _id : "2",
//             title : "Bitcoin: A Strategic Reserve for Business Continuity in Critical Moments",
//             desc : "In today’s rapidly evolving business environment, companies must be prepared for unforeseen disruptions, especially in their financial operations."
//         },
//     ];

//     return NextResponse.json(blogs);
// }