import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useReducer } from 'react'
import allitems from "./allitems.json"

export default function Home() {
    const [returnHTML, setReturnHTML] = useState("")
    const handleclick = () => {
        // get value of searchvalue by id
        const searchvalue = document.getElementById("searchvalue").value
        window.location.href = '/listing?searchvalue=' + searchvalue
    }

    const onKeyUp = (event) => {
        if (event.key === "Enter") {
            handleclick()
        }
    }

    const handleTextChange = () => {
        var suggestions = [];
        var rawsuggestions = [];
        var tmpreturnHTML = "";
        var searchvalue = document.getElementById("searchvalue").value;
        if (searchvalue.length > 0) {
            for (var i = 0; i < allitems.length; i++) {
                if (allitems[i].item_name.toLowerCase().includes(searchvalue.toLowerCase())) {
                    suggestions.push(allitems[i].item_name);
                    rawsuggestions.push(allitems[i].url_name);
                }
            }
        }
        var count = 0;
        suggestions.map(suggestion => {
            tmpreturnHTML += "<a class='suggestionitem' href='/listing?searchvalue=" + rawsuggestions[count] +"'><p class='suggestionitemword'>" + suggestion + "</p></a>";
            count += 1;
            // replace all " with spaces
            tmpreturnHTML = tmpreturnHTML.replace(/"/g, " ");
        })
        // add styling to the suggestions
        tmpreturnHTML += "<style>.suggestionitem{background-color:#ffffff; flex-basis:20%; border-radius:5px; margin:7px; transition: all 0.2s ease-in-out;} .suggestionitemword{text-align:center;} .suggestionitem:hover{background-color: #636363;transition: all 0.2s ease-in-out;}</style>";
        // append returnHTML to suggestions div 
        setReturnHTML(tmpreturnHTML);
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
                {/* <div className={styles.navbar__links}>
                    <a href='#' className={styles.navbar__link}>Sign up</a>
                    <a href='#' className={styles.navbar__link}>Log in</a>
                </div> */}
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
                            <input id='searchvalue' type="text" className={styles.searchbar__input} placeholder="Search for an item" onKeyPress={onKeyUp} onChange={handleTextChange} />
                            <button id='searchbtn' className={styles.searchbar__button} onClick={handleclick}>Search</button>
                        </div>
                    </div>
                </div>
                <div id='suggestions' className={styles.suggestions}>
                    <div className={styles.suggestionitemsbox} dangerouslySetInnerHTML={{ __html: returnHTML }} />
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.copyright}>
                    2022 © WarScrapper
                </div>
                <Link href="/tos">
                    <a className={styles.tos}>Terms of Service</a>
                </Link>
                <a href='https://warframe.market' className={styles.warframemarket}>
                    Warframe Market
                </a>
            </footer>
        </div>
        
    )
}