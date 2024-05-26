import React from 'react';
import styles from './Job.module.css';
import { FiMoreHorizontal } from "react-icons/fi"; 


const Job = () => {
  return (
    <>
        <div className={styles.card}>
            <div className={styles.header}>
                <p>Ad</p>
                <FiMoreHorizontal />
            </div>
            <div className={styles.body}>
                <p>Get the latest jobs and industry news</p>
                <div className={styles.imgs}>
                    <img src="https://lh3.googleusercontent.com/dZaRBi0ywCVNdjwCnOO08yqY_NotcUfo9VGOKtMBvntvEvxoFJMg-7wU2bReBorvhQJi=s85"/>
                    <img src="https://lh3.googleusercontent.com/dZaRBi0ywCVNdjwCnOO08yqY_NotcUfo9VGOKtMBvntvEvxoFJMg-7wU2bReBorvhQJi=s85" />
                </div>
                <p>Ashutosh, ready for your cram job?</p>
                <div className={styles.btngrp}>
                    <button className={styles.btn}>Follow</button>
                </div>
            </div>
        </div>
    </>
  );
};

export default Job;
