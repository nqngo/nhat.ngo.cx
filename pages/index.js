// import Container from '@material-ui/core/Container'
// import Typography from '@material-ui/core/Typography'
// import Link from 'next/link'

// export default function Index() {
//   return (
//     <Container maxWidth="sm">
//     <Typography variant="h4" component="h1" gutterBottom>
//        Next.js example
//      </Typography>
//      <Link href="/about"><a>About me.</a></Link>
//     </Container>
//   )
// }
import React from 'react'
import Head from 'next/head'
import Header from '../components/header' 

export default function Index() {
  return (
    <div>
      <Head>
        <title>Test Next App</title>
      </Head>

      <Header location="home"></Header>
      <main className="my-12">
        <h1 className="text-red-100 text-2x1">
          Hello there!
        </h1>
      </main>
    </div>
  )
}