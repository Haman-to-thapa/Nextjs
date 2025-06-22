import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import * as actions from '@/actions'
import { notFound } from 'next/navigation'

const SnippetDetailsPage = async ({ params }: {
  params: Promise<{ id: string }>
}) => {
  const id = parseInt((await params).id)
  await new Promise((r) => setTimeout(r, 2000))

  const snippet = await prisma.snippet.findUnique({
    where: {
      id
    }
  })

  if (!snippet) notFound()

  const deleteSnippetActions = actions.deleteSnippet.bind(null, snippet.id)

  return (
    <div className='flex flex-col gap-5'>
      <div className="flex items-center justify-between">
        <h1 className='text-xl font-bold'>{snippet.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippet/${id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deleteSnippetActions}>
            <Button type='submit' variant={'destructive'}>Delete</Button>
          </form>

        </div>
      </div>
      <pre className='p-3 bg-gray-200 rounded border-gray-200'>
        <code>
          {snippet.code}
        </code>
      </pre>
    </div>
  )
}

export default SnippetDetailsPage