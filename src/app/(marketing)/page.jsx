import Title from '@/components/pageComponents/Title'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
      <Title title='HOME'/>
      {/*<a href='/blog'>BLOG</a>*/}
      <Link href={'/blog'}>BLOG</Link>
    </>
  )
}

export default Home