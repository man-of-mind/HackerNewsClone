import React from "react";
import Header from "./header";
import styles from "./home/home.module.scss";
import StoryContainer from "./storyContainer";

const LatestStories = () => {
    return (
        <div className={styles['home']}>
            <Header />
            <StoryContainer author="timothy" title="Timothy wins scholarship in USA" time={28} totalComment={1000}></StoryContainer>
        </div>
    );
}

export default LatestStories;