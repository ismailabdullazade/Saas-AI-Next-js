import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {ChatCompletionRequestMessage} from "openai"

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
})

const instructionMessage:ChatCompletionRequestMessage={
    role:"system",
    content:"You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
}

export async function POST(req:Request){
    try {
        const {userId} = auth()
        const body = await req.json();
        const {messages} = body;

        if(!userId){
            return new NextResponse("Unathorized",{status:401})
        }
        if(!messages){
            return new NextResponse("Messages are required",{status:400})
        }

        const response = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages:[instructionMessage, ...messages]
        })
        
        return NextResponse.json(response.choices[0].message)


    } catch (error) {
        console.log("[CODE ERROR]",error);
        return new NextResponse("Internal error",{status:500})
        
    }
}