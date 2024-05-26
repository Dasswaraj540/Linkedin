import React,{ useState} from 'react';
import styles from "./Feed.module.css";
import { MdMoreHoriz } from 'react-icons/md';
import { BiLike,BiCommentDetail } from 'react-icons/bi';
import { FaGlobeAmericas } from 'react-icons/fa';
import { RiSendPlaneFill,RiShareForwardLine } from 'react-icons/ri';

const Feed = ({image,desc,name,profile_pic}) => {

    // const [showMoreDetail, setShowMoreDetail] = useState(false);

    // const showMore = () => {
    //     setShowMoreDetail(!showMore);
    // }



  return (
    <>
        <div className={styles.card}>
            <div className={styles.headerContainer}>
                <div className={styles.header}>
                    <img src={profile_pic} />
                    <div className={styles.name}>
                        <strong>{name}</strong>
                        <p>Management Accountant at PepsiCo</p>
                        <div className={styles.globe}>
                            <FaGlobeAmericas />
                            <p>1w</p>
                        </div>
                    </div>
                </div>
                <div>
                    <MdMoreHoriz className={styles.moreIcon}/>
                    {/* <ul className={styles.more}>
                        <li className={styles.moreItem}>Delete Post</li>
                    </ul> */}
                </div>
            </div>
            <div className={styles.body}>
                <p>{desc}</p>
                <img src={image} />
                <div className={styles.iconsContainer}>
                    <div className={styles.reactionIcons}>
                        <BiLike className={styles.icons}/>
                        <p>Like</p>
                    </div>
                    <div className={styles.reactionIcons}>
                        <BiCommentDetail className={styles.icons}/>
                        <p>Comment</p>
                    </div>
                    <div className={styles.reactionIcons}>
                        <RiShareForwardLine className={styles.icons}/>
                        <p>Share</p>
                    </div>
                    <div className={styles.reactionIcons}>
                        <RiSendPlaneFill className={styles.icons}/>
                        <p>Send</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Feed;
