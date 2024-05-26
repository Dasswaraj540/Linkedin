import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import styles from "./Login.module.css";
import { FcGoogle } from 'react-icons/fc';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Login = () => {

    const provider = new GoogleAuthProvider();
    const [users, setUsers] = useState({});
    const [loggedUser, setLoggedUser] = useState({});
    const router = useRouter();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            setUsers(result);
        }).catch((err) => {
            router.push(`/error/${err}`)
        })
    }

    onAuthStateChanged(auth, (curreUser) => {
        setLoggedUser(curreUser);
    })

    return (
        <div className={styles.container}>
            <Head>
                <title>LinkedIn | Login</title>
                <link rel="icon" href="/linkedin_ico.ico" />
            </Head>
            <div className={styles.loginContainer}>
                <div className={styles.image}>
                    <img src='/LinkedIn_Logo.png' />
                    <h2>Make the most of your professional life</h2>
                </div>
                <div onClick={signInWithGoogle} className={styles.button}>
                    <FcGoogle />
                    <button>Login With Google</button>
                </div>
            </div>
            <div className={styles.vector}>
                <img src='/Login_vector.svg' />
            </div>
        </div>
    )
}

export default Login