import Head from 'next/head'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>Resume of Ratnesh Sharma</title>
        <meta name="description" content="Resume made by using NextJs, TypeScript and SCSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
         <h1>Ratnesh Sharma</h1>
         <p className={styles.tagline}>Resume made by using NextJs, TypeScript and SCSS</p>
      </section>
    </>
  )
}
