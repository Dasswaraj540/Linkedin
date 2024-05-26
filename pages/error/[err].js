import Head from 'next/head';
import React from 'react';
import style from './error.module.css';
import { useRouter } from 'next/router';

const Err = ({errs}) => {

    const router = useRouter();
    return (
        <>
            <Head>
                <title>Error</title>
                <link rel="icon" href="/linkedin_ico.ico" />
            </Head>
            <div className={style.main}>
                <div className={style.nav}>
                    <img src='/LinkedIn_Logo.png' />
                </div>
                <div className={style.details}>
                    <img src='/error.svg'/>
                    <h2>Oops! An error Occured</h2>
                    <p>{errs}</p>
                    <button onClick={() => router.push('/')} >Go to your Feed</button>
                </div>
            </div>
        </>
    )
}

export default Err;