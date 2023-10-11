import Title from '@/components/pageComponents/Title'
import React from 'react'

const Id = ({params}) => {
    console.log(params)
    const a=[1,2,3]
  return (
    <>
        <Title title='ID'/>
        {
        params.id.map((item)=>(<p className='text-center'>{item}</p>))
        }
    </>

  )
}

export default Id