import React from "react";
import { Link } from "react-router-dom";
import styles from "./home/home.module.scss";

const Header = () => {
    return (
        <div>
            <h1>Hacker News Clone</h1>
            <div className={styles['sections']}>
                <Link to="/top-stories">TOP STORIES</Link>
                <Link to="/latest-stories/first">LATEST STORIES</Link>
                <Link to="/best-stories/second">BEST STORIES</Link>
            </div>
        </div>
    );
}

export default Header;