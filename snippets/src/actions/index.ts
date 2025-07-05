"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation";
import {revalidatePath} from "next/cache"


export const SaveSnippet = async(id:number , code:string) => {
 await prisma.snippet.update({
  where: {
    id
  }, 
  data : {
    code
  }
 });
 redirect(`/snippet/${id}`)
}




export const deleteSnippet = async (id:number) => {

  await prisma.snippet.delete({
    where: {id}
  })
  revalidatePath('/');
  redirect('/')
}


export const createSnippet = async (fromData: FormData) => {
  
    const title = fromData.get('text') as string ;
    const code = fromData.get('code') as string ;

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code
      }
    });
    console.log("create snippet", snippet)
    revalidatePath('/');
    redirect('/')
  }