"use client"

import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import type { Snippet } from '@/generated/prisma'
import { Button } from './button'
import { SaveSnippet } from '@/actions'


const EditSnippetFrom = ({ snippet }: { snippet: Snippet }) => {
  const [code, setcode] = useState(snippet.code)

  const changeEventHandler = (value: string = "") => {
    setcode(value)
  }


  const saveSnippetActions = SaveSnippet.bind(null, snippet.id, code)

  return (
    <div className='flex flex-col gap-4'>
      <form action={saveSnippetActions} className='flex items-center justify-between'>
        <h1>Your Code Editor</h1>
        <Button type='submit'>Save</Button>
      </form>
      <Editor height="40vh"
        theme='vs-dark'
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={changeEventHandler}

      /></div>
  )
}

export default EditSnippetFrom