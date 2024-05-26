import React, { useEffect, useState } from 'react';
import Feed from './Feed';
import { TailSpin } from "react-loader-spinner";
import { collection,getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useRouter } from 'next/router';

const FeedPage = () => {

    const [datas, setDatas] = useState([]);
    const collectionRef = collection( db , "posts" );
    const [ myPost , setMyPost ] = useState([]);
    const [ snapshot ] = useCollection(collectionRef);
    const router = useRouter();

    useEffect(() => {
        getDocs(collectionRef)
          .then((snapshot) => {
            setMyPost(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          }).catch((err) => {
            router.push(`error/${err}`)
          })
      }, [snapshot])

    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/?page=346&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}`)
        .then((data) => data.json())
        .then((res) => setDatas(res))
        .catch((err) => {
            router.push(`error/${err}`)
          });
        
    }, []);



    return (
        <div>
            {!myPost ? 
            <TailSpin heigth="100" width="100" color='grey' /> : 
            myPost.map((item, i) => {
                    return (
                        <Feed key={i} desc={item?.desc} name={item?.user} profile_pic={item?.profilePic} />
                    );
                })}
            {!datas ? 
            <TailSpin heigth="100" width="100" color='grey' /> : 
            datas.map((item, i) => {
                    return (
                        <Feed key={i} image={item?.urls.full} desc={item?.sponsorship?.tagline} name={item?.user?.name} profile_pic={item?.user?.profile_image.large} />
                        
                    );
                })}
                <div style={{"display": "flex","justifyContent" : "center", "marginTop": "20px"}}>
                    <TailSpin heigth="100" width="100" color='grey' />
                </div>
        </div>
    );
};

export default FeedPage;

// {`${item?.user?.first_name} ${item?.user?.last_name}`}