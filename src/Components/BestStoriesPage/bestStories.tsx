import React from "react";
import Header from "../header";
import styles from "../home/home.module.scss";
import { GetData } from "../../utils";
import { Props } from "../storyContainer";
import StoryContainer from "../storyContainer";

const BestStories = () => {
    let {stories, state} = GetData("beststories");

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
        </div>) :  (<div className={styles['loading']}>Loading best stories...</div>)
    }</>);
}

export default BestStories;