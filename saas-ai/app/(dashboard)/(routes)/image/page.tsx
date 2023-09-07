"use client"

import * as z from "zod"
import { cn } from "@/lib/utils"
import {zodResolver} from "@hookform/resolvers/zod"
import Heading from '@/components/Heading'
import { ImageIcon, MessageSquare } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { amountOptions, formSchema } from './constants'
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import axios from "axios"
import { Empty } from "@/components/Empty"
import { Loader } from "@/components/Loader"
import { UserAvatar } from "@/components/user-avatar"
import { BotAvatar } from "@/components/Bot-Avatar"
import { SelectValue, Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"

const ImagePage = () => {

  const router = useRouter();
  const [images,setImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
      resolver:zodResolver(formSchema),
      defaultValues:{
          prompt:"",
          amount:"1",
          resolution:"512x512"
      }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values:z.infer<typeof formSchema>)=>{
    try {
      setImages([]);
      
      const response = await axios.post("api/conversation",values);

      const urls = response.data.map((image:{url:string})=>image.url);

      setImages(urls);

      form.reset()

    } catch (error:any) {
      //TODO: Open Pro Modal
      console.log(error);
    }finally{
      router.refresh();
    }
    
  }

  return (
    <div>
      <Heading 
      title="Image Generation" 
      description='Turn your prompt into an image.' 
      icon={ImageIcon} 
      iconColor='text-pink-700' 
      bgColor='bg-pink-700/10' />

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form 
            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
              name="prompt"
              render={({field})=>(

                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder="A picture of a horse in Swiss Alps ?"
                    {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
              />

              <FormField
                control={form.control}
                name="amount"
                render={({field})=>(
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value}/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map(option=>(
                          <SelectItem
                          key={option.value}
                          value={option.value}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>

                    </Select>
                  </FormItem>
                )}
              />

              <Button disabled={isLoading} className="col-span-12 lg:col-span-2 w-full">
                Generate
              </Button>

            </form>

          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-20">
              <Loader/>

            </div>
          )}
          {images.length === 0 && !isLoading && (
            <Empty label="No images generated."/>
          )}
          <div>
            Images will rendered here
          </div>
        </div>
      </div>



    </div>
  )
}

export default ImagePage