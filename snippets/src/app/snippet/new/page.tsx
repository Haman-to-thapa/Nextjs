

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const CreateSnippetPage = () => {

  const createSnippet = async (fromData: FormData) => {
    "use server"
    const title = fromData.get('text') as string;
    const code = fromData.get('code') as string;

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code
      }
    });
    console.log("create snippet", snippet)
    redirect('/')
  }

  return (
    <form action={createSnippet} >
      <div className="">
        <Label>Title</Label>
        <Input
          type='text'
          name='text'
          id='title'
        />
      </div>
      <div className="">
        <Label>Code</Label>
        <Textarea
          name='code'
          id='title'
        />
      </div>
      <Button>
        New
      </Button>
    </form>
  )
}

export default CreateSnippetPage