import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Listing() {
    const getApiData = async (item_names) => {
        const response = await fetch('http://localhost:3000/api/items/' + item_names);
        const data = await response.json()
        return data
    }
    const returnData = () => {
        // get value of searchvalue from query parameter with the name searchvalue
        const router = useRouter()
        const { searchvalue } = router.query
        console.log(searchvalue)
        const data = getApiData(searchvalue)

        if (data == null) alert("No data found")
        else console.log(data)

        return data
    }

    returnData()
    return (
        <div className={styles.container}>
            <Head>
                <title>War Scrapper</title>
                <meta name="description" content="A website to get the lowest prices of items for trading" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className={styles.navbar}>
                <Image className={styles.logo} src="/favicon.ico" alt="War Scrapper Logo" width={60} height={60} />
                <div className={styles.navbar__links}>
                    <a href='#' className={styles.navbar__link}>Sign up</a>
                    <a href='#' className={styles.navbar__link}>Log in</a>
                </div>
            </nav>
            <main className={styles.main}>

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