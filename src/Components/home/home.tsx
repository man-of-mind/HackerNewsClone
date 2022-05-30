import React from "react";
import Header from "../header";
import styles from "./home.module.scss";
import StoryContainer from "../storyContainer";
import { Props } from "../storyContainer";
import { GetData } from "../../utils";


const HomePage = () => {
    
    let {stories, state} = GetData("topstories");

    let displayStories = stories.map((story:Props, index) => { 
        return ( 
            <StoryContainer key={index}
                by={story.by} 
                title={story.title} 
                time={story.time}
                descendants={story.descendants} 
                url={story.url}
            />
        );
    })

    return(<>{ state === false ? (
        <div className={styles['home']}>
            <Header />
            {displayStories}
        </div>) :  (<div className={styles['loading']}>Loading top stories...</div>)
    }</>);
}

export default HomePage;