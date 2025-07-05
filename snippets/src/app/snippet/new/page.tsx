"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useActionState } from 'react'
import * as actions from '@/actions'

const CreateSnippetPage = () => {

  const [formStateData, action] = useActionState(actions.createSnippet, { message: "" })



  return (
    <form action={action} >
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
      <div className="">{formStateData.message}</div>
      <Button>
        New
      </Button>
    </form>
  )
}

export default CreateSnippetPage