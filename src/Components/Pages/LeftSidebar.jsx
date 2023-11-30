import React from "react";
import styles from "../Styles/Lsb.module.css";
import house from "../Assets/house.svg";
import search from "../Assets/search.svg";
import book from "../Assets/book.svg";
import heart from "../Assets/heart.svg";
import user from "../Assets/user.svg";
import message from "../Assets/message.svg";
import plus from "../Assets/plus.svg";
import video from "../Assets/video.svg";
import bars from "../Assets/bars.svg";
import twitter from "../Assets/twitter.svg";
const LeftSidebar=()=>{
    return(
        <div className={styles.left}>
            {/* logo */}
            <div className={styles.logo}>
                SOCIAL-MEDIA
            </div>

            {/* mid options */}
            <div className={styles.options}>
                {/* <img src={search} />
                <img src={book} />
                <img src={heart} />
                <img src={user} />
                <img src={message} />
                <img src={plus} />
                <img src={video} /> */}
                <div className={styles.optionswrap}>
                    <img src={house} className={styles.img} alt="home"/>
                    <p>Home</p>
                </div>
                <div className={styles.optionswrap}>
                    <img src={search} className={styles.img} alt="search"/>
                    <p>Search</p>
                </div>
                <div className={styles.optionswrap}>
                    <img src={book} className={styles.img} alt="book"/>
                    <p>Explore</p>
                </div>
                <div className={styles.optionswrap}>
                    <img src={video} className={styles.img} alt="video"/>
                    <p>Reels</p>
                </div>
                <div className={styles.optionswrap}>
                    <img src={message} className={styles.img} alt="message"/>
                    <p>Message</p>
                </div>
                <div className={styles.optionswrap}>
                    <img src={heart} className={styles.img} alt="heart"/>
                    <p>Notifications</p>
                </div>
                <div className={styles.optionswrap}>
                    <img src={plus} className={styles.img} alt="plus"/>
                    <p>Create</p>
                </div>
                <div className={styles.optionswrap}>
                    <img src={user} className={styles.img} alt="user"/>
                    <p>Profile</p>
                </div>
            </div>

            {/* lower one */}
            <div className={styles.menu}>
                <div className={styles.optionswrap}>
                    <img src={twitter} className={styles.img} alt="twitter"/>
                    <p>Threads</p>
                </div>
                <div className={styles.optionswrap}>
                    <img src={bars} className={styles.img} alt="bars"/>
                    <p>Bars</p>
                </div>
            </div>
        </div>
    )
}
export default LeftSidebar ;