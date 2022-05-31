import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Head from '../components/head'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <Header />
      <h1 className="text-6xl font-bold text-center text-blue-500">Olá mundo!</h1>
      <Footer />
      </div>
  )
}
