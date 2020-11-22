import React from 'react'
import Head from 'next/head'
import Header from '../components/header' 

export default function Index() {
  return (
    <div className="h-full">
      <Head>
        <title>Nhat Ngo</title>
      </Head>

      <Header location="home"></Header>
      <main className="h-5/6 p-20 items-center justify-center text-indigo-100 text-4xl md:text-7xl">
        <div className="">
          Hi. I'm Nhat Ngo.
        </div>
        <div className="">
          <span>
            I am{'\u00A0'}
          </span>
          <span className="typewriter">
            a DevOps engineer.
          </span>
        </div>
      </main>
    </div>
  )
}