import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { icnreaseApiLimit, checkApiLimit } from "@/lib/api-limit";


import OpenAI from "openai";

const openai = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
})

export async function POST(req:Request){
    try {
        const {userId} = auth()
        const body = await req.json();
        const {prompt,amount=1,resolution="512x512"} = body;

        if(!userId){
            return new NextResponse("Unathorized",{status:401})
        }
        if(!prompt){
            return new NextResponse("Prompt are required",{status:400})
        }
        if(!amount){
            return new NextResponse("Amount are required",{status:400})
        }
        if(!resolution){
            return new NextResponse("Resolution are required",{status:400})
        }

        const freeTrial = await checkApiLimit();

        if(!freeTrial){
            return new NextResponse("Free trial has expired.",{status:403})
        }

        const response = await openai.images.generate({
            prompt,
            n:parseInt(amount,10),
            size:resolution
        })

        await icnreaseApiLimit();
        
        return NextResponse.json(response.data)


    } catch (error) {
        console.log("[IMAGE ERROR]",error);
        return new NextResponse("Internal error",{status:500})
        
    }
}