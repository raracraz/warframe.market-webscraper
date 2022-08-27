import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

const getData = async (item_name) => {
    const res = await fetch('http://localhost:3000/api/items/' + item_name)
    const data = await res.json()
    return data
}

export default function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        getData().then(data => setData(data))
    }, [])
    return (

        <div className={styles.container}>
            <Head>
                <title>War Scrapper</title>
                <meta name="description" content="A website to get the lowest prices of items for trading" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.bluefilter}></div>

                <Image className={styles.image} src="/wrBg2.jpg" alt="War Scrapper Background" width={1920} height={590} />

            </main>

            <footer className={styles.footer}>
                <div className={styles.copyright}>
                    2022 © WarScrapper
                </div>
                <a href='#' className={styles.tos}>
                    Terms of Service
                </a>
                <a href='https://warframe.market' className={styles.warframemarket}>
                    Warframe Market
                </a>
            </footer>
        </div>
    )
}