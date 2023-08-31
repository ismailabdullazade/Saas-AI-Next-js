<<<<<<< HEAD
import * as z from "zod"

export const formSchema = z.object({
    prompt:z.string().min(1,{message:"Prompt is required"})
=======
import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1,{message:"Prompt is required"})
        
>>>>>>> af376d95a9e9f4d073d01c649fe7436b3012c701
})