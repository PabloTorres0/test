//"use client"
export const metadata={
  title:'SHOPPP',
  description:'DEscripcion'
}
import Title from '@/components/pageComponents/Title'
import React from 'react'
import { POST } from '../page'
import Link from 'next/link'

export function generateMetadata({params}){
  const post= POST.find((post)=>post.slug===params.slug)
  return {
    title:post.title,
    description:'Descripcionsdasd'
  }
}

const Slug = ({params}) => {
  const post= POST.find((post)=>post.slug===params.slug)



    return (  
    <>
    <Title title={post.title}/>
    <p className='text-center'>{post.content}</p>
    <div className="text-center mt-5">
      <Link
      
      className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'
      href={'/blog'}
      >
        VOLVER
      </Link>
    </div>
    
    </>
  )
}

export default Slug