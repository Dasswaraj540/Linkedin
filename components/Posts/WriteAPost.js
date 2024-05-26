import React, { useState } from 'react';
import styles from "./Write.module.css";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from "../../firebase";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, getDocs } from "firebase/firestore";

const WriteAPost = () => {

    const postRef = collection(db , "posts");
    const [desc, setDesc] = useState("");
    // const [photo, setPhoto] = useState('');
    const [progress, setprogress] = useState(0);

    const [users, setUsers] = useState({});
    const storages = getStorage();

    onAuthStateChanged(auth, (currUsers) => {
        setUsers(currUsers);
    })

    const setPostData = async (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        console.log(desc);
        console.log(file);
        const postData = await addDoc(postRef,
            {
                user: users?.displayName,
                desc: desc,
                place: "pune",
                profilePic: users?.photoURL
            }
        )
        console.log(postData.id);

        if(!file) return;
        const storageRef = ref(storages,`/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef,file);

        uploadTask.on("state_changed",(snapshot) => {
            //Loading bar
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setprogress(prog);
        },(error)=> {
            console.log(error);
        },() => {
            getDownloadURL(uploadTask.snapshot.ref).then( url => console.log(url));
        });

    }

    return (
        <>
            <div className={styles.posts}>
                <div className={styles.header}>
                    <img className={styles.imgs} src={users?.photoURL} />
                    <div>
                        <input className={styles.inputs} onChange={(e) => {setDesc(e.target.value); }} placeholder="Start a post"/>
                    </div>
                </div>
                <div className={styles.body}>
                    <form onSubmit={setPostData} className={styles.iconContainer}>
                        <input type='file' id='file' accept='image/' hidden/>
                        <label className={styles.iconContainer} htmlFor='file'>
                            <MdPhotoSizeSelectActual className={styles.photoIcon} />
                            <p>Photo</p>
                        </label>
                        <button title='Submit Photo' type='submit'><AiOutlineSend /></button>
                    </form>
                    <div className={styles.iconContainer}>
                        <BsYoutube className={styles.videoIcon} />
                        <p>Video</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <BsFillCalendarDateFill className={styles.eventIcon} />
                        <p>Event</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <BiNews className={styles.articleIcon} />
                        <p>Write article</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WriteAPost;
