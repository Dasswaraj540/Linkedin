import React, { useState } from "react";
import { GrSearch } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';
import { ImHome3 } from 'react-icons/im';
import { BiGroup } from 'react-icons/bi';
import { FaSuitcase } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { MdNotifications, MdArrowDropDown } from 'react-icons/md';
import { CgMenuGridO } from 'react-icons/cg';
import style from "./Navbar.module.css";
import { auth } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

function Navbar() {

    const provider = new GoogleAuthProvider();
    const [users, setUsers] = useState({});
    const [loggedUser, setLoggedUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            setUsers(result);
            console.log(result);
            console.log(users);
        }).catch((err) => {
            console.log(err);
        })
    }

    onAuthStateChanged(auth, (curreUser) => {
        setLoggedUser(curreUser);
    })



    return (
        <>
            <nav className={style.navbar}>
                <div className={style.logo}>
                    <div className={style.linkedinLogo}>
                        <BsLinkedin className={style.linkedin} />
                        <div className={style.search}>
                            <GrSearch className={style.searchIcon} />
                            <input placeholder="Search" />
                        </div>
                    </div>

                    <div>
                        <div className={style.nav}>
                            <div className={style.icons}>
                                <ImHome3 className={style.icon} onClick={() => {
                                    signOut(auth);
                                    console.log(users);
                                }} />
                                <p>Home</p>
                            </div>
                            <div className={style.icons}>
                                <BiGroup className={style.icon} />
                                <p>My Network</p>
                            </div>
                            <div className={style.icons}>
                                <FaSuitcase className={style.icon} />
                                <p>Jobs</p>
                            </div>
                            <div className={style.icons}>
                                <AiFillMessage className={style.icon} />
                                <p>Messaging</p>
                            </div>
                            <div className={style.icons}>
                                <MdNotifications className={style.icon} />
                                <p>Notifications</p>
                            </div>
                            <div className={`${style.icons} ${style.meIcon}`}>
                                <img src={loggedUser?.photoURL} />
                                <div className={style.me}>
                                    <p>{!loggedUser ? "Me" : loggedUser?.displayName}</p>
                                    <MdArrowDropDown style={{"fontSize" : "20px"}}/>
                                </div>
                            </div>
                            <div className={style.icons}>
                                <CgMenuGridO className={style.icon} />
                                <div className={style.me}>
                                    <p>Work</p>
                                    <MdArrowDropDown style={{"fontSize" : "20px"}}/>
                                </div>
                                
                            </div>
                            <div className={style.icons}>
                                <p>Try Premium for free</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;