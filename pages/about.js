import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Nhat Ngo - About Me</title>
      </Head>
      <p>Hi! My name is Nhat Ngo.</p>
      <p>I am currently working as a DevOps HPC engineer at the University of Melbourne.</p>
      <p>I work mostly in Openstack and managing infrastructure as code. I also enjoy programming in Python, NodeJS and dabble in new technologies.</p>
    </Layout>
  )
}
