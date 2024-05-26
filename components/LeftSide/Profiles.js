import React,{ useState } from 'react';
import styles from "./Profiles.module.css";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsSquareHalf } from "react-icons/bs";
import { auth } from "../../firebase";
import { onAuthStateChanged } from 'firebase/auth';

const Profiles = () => {

    const [users, setUsers] = useState({});

    onAuthStateChanged(auth , (currUsers) => {
        setUsers(currUsers);
        // console.log(currUsers);
    })


    return (
        <div>
            <div className={styles.card}>
                <div className={styles.background}></div>
                <div className={styles.text}>
                    <div className={styles.avatar}>
                        <img className={styles.img} src={users?.photoURL} />
                    </div>
                    <div className={styles.name}>
                        <h3>{users?.displayName}</h3>
                        <p>Student at Indian Institute of Technology</p>
                    </div>
                </div>
                <div className={styles.textbody}>
                    <hr />
                    <div className={styles.connections}>
                        <div>
                            <h4>Connections</h4>
                            <h4>Grow your network</h4>
                        </div>
                        <div>
                            <p className={styles.connText}>19</p>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.premium}>
                        <p>Access exclusive tools insights</p>
                        <div>
                            <BsSquareHalf style={{color: "gold"}} />
                            <strong>Try Premium for free</strong>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.items}>
                        <BsFillBookmarkFill style={{"fontSize": "16px"}} />
                        <p>My Items</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profiles;
