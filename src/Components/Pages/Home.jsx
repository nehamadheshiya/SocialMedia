import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Feed from "./Feed";
// import "../../App.css";
import styles from "../Styles/Home.module.css"

const Home=()=>{
    return(
        <div className={styles.home}>
            <LeftSidebar/>
            <Feed/>
            <RightSidebar/>
        </div>
    )
}
export default Home;