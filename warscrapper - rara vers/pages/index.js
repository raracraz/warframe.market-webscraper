import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
    const getApiData = async (item_names) => {
        const response = await fetch('http://localhost:3000/api/items/' + item_names);
        const data = await response.json()
        return data
    }

    // const [item_name, setItemName] = useState('')
    // console.log(item_name)

    // useEffect(() => {
    //     const data = getApiData("hells_chamber")
    // }, [])

    const handleclick = () => {
        // get value of searchvalue by id
        const searchvalue = document.getElementById("searchvalue").value
        // console.log(searchvalue)
        // const data = getApiData(searchvalue)
        
        // if (data == null) alert("No data found")
        // else console.log(data)

        // return data
        // redirect to /listing with searchvalue as query parameter
        window.location.href = '/listing?searchvalue=' + searchvalue
    }

    const onKeyUp = (event) => {
        if (event.key === "Enter") {
            handleclick()
        }
    }

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
                <div className={styles.imageBody}>
                    <Image className={styles.image} src="/wrBg2.png" alt="War Scrapper Background" width={1920} height={590} />
                    <div className={styles.search}>
                        <div className={styles.header}>
                            <div className={styles.title}>
                                {/* <Image className={styles.headerlogo} src="/favicon.ico" alt="War Scrapper Logo" width={60} height={60} /> */}
                                War Scrapper
                            </div>
                            <div className={styles.description}>
                                Get details on all the lowest priced items
                            </div>
                        </div>
                        <div className={styles.searchbar}>
                            <input id='searchvalue' type="text" className={styles.searchbar__input} placeholder="Search for an item" onKeyPress={onKeyUp}/>
                            <button id='searchbtn' className={styles.searchbar__button} onClick={handleclick}>Search</button>
                        </div>
                    </div>
                </div>
                {/* search bar */}
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