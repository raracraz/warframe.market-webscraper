import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Listing.module.css'
import React from 'react'
import { useRouter } from 'next/router'
import DataTable from 'react-data-table-component';
import { AxiosProvider, Request, Get, Delete, AxiosHead, Post, Put, Patch, withAxios } from 'react-axios'
import allitems from "./allitems.json"

export default function Listing() {
    const router = useRouter();
    var { searchvalue } = router.query;

    if (searchvalue === undefined) return null;
    // fetch data from api using axios
    var axiosURL = 'https://warframe-market-webscraper.vercel.app/api/items/' + searchvalue;
    // var axiosURL = 'http://localhost:3000/api/items/' + searchvalue;
    // find searchvalue in allitems.json and find the item_name
    var item_name = "";
    for (var i = 0; i < allitems.length; i++) {
        try{
            if (allitems[i].url_name === searchvalue) {
                item_name = allitems[i].item_name;
            }
        } catch (e) {
            item_name = "Item not found";
        }
    }

    const columns = [
        {
            name: 'Username',
            selector: 'username',
        },
        {
            name: 'Platinum',
            selector: 'platinum',
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: 'quantity',
            sortable: true,
        },
        {
            name: 'Mod Rank',
            selector: 'mod_rank',
            sortable: true,
        },
    ];
    return (
        <div className={styles.container}>
            <Head>
                <title>War Scrapper</title>
                <meta name="description" content="A website to get the lowest prices of items for trading" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css"
                    rel="stylesheet"
                />
            </Head>
            <nav className={styles.navbar}>
                {/* <Image className={styles.logo} src="/favicon.ico" alt="War Scrapper Logo" width={60} height={60} /> */}
                {/* <div className={styles.navbar__links}>
                    <a href='#' className={styles.navbar__link}>Sign up</a>
                    <a href='#' className={styles.navbar__link}>Log in</a>
                </div> */}
            </nav>
            <main className={styles.main}>
                {/* Back to index button using <Link>*/}
                <Link href="/">
                    <a className={styles.backbutton}>🡠 Back</a>
                </Link>
                
                <Get url={axiosURL} >
                    {(error, response, isLoading, makeRequest, axios) => {
                        if (error) {
                            setTimeout(() => {
                                router.push("/");
                            }, 3000);
                            return (<div className={styles.error}>Something bad happened...</div>)
                        }
                        else if (isLoading) {
                            return (<div className={styles.loading}>Loading...</div>)
                        }
                        else if (response !== null) {
                            return (
                                <div className={styles.gridTable}>
                                    <DataTable
                                        title={item_name}
                                        columns={columns}
                                        data={response.data}
                                        // set pagination to true and limit to 5 rows
                                        pagination
                                        paginationPerPage={5}
                                        paginationRowsPerPageOptions={[5, 10, 15, 20, 25]}
                                        highlightOnHover={true}
                                        // change style to striped
                                        striped={true}
                                        className={styles.table}
                                    />
                                </div>
                            )
                        }
                        return (<div>Default message before request is made.</div>)
                    }}
                </Get>
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