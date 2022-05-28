import React, { useEffect, useState } from "react";
import Header from "../header";
import styles from "./home.module.scss";
import axios from "axios";
import StoryContainer from "../storyContainer";
import { Props } from "../storyContainer";

const topStoriesIds = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
var newData: Props = {
    author: "",
    title: "",
    time: 0,
    totalComment: 0
};

const HomePage = () => {
    const [allStories, setStories] = useState<Array<Props>>([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const setStory = (story: Props) => {
            newData = story;
        }
        function getStoryDetail (id: number) {
            let detail: Props = {
                author: "",
                title: "",
                time: 0,
                totalComment: 0
            };
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then((response) => {
                const sdetail:Props = {
                    author : response.data.by,
                    totalComment: response.data.descendants,
                    title: response.data.title,
                    time: response.data.time
                }
                Object.assign(detail, sdetail);
                setStory(Object.assign(detail, sdetail));
            }).catch((err) => {
                console.log(err.message);
            });
            console.log(newData)
            return newData;
        }
    

        axios.get(topStoriesIds).then((response) => {
            let storiesIds = response.data.slice(0, 4);
            const storiesDetails:Array<Props> = storiesIds.map((id: number) => {
                return getStoryDetail(id);
            });
            setStories(storiesDetails);
            setLoading(false);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    console.log(allStories)
    allStories.forEach(element => {
        console.log(element)
    });
    let displayStories = allStories.map((story:Props, index) => { 
        return ( 
            <StoryContainer key={index}
                author={story.author} 
                title={story.title} 
                time={story.time}
                totalComment={story.totalComment} 
            />
        );
    })

    return(<>{ !loading ? (
        <div className={styles['home']}>
            <Header />
            <div className={styles['story-detail']}>
                    <span>Useless of "dd" (2015)</span>
                    <div>by RaouIP | 5/22/2022 3:09am | 36 comments</div>
            </div>
            {displayStories}
        </div>) :  (<div>Loading...</div>)
    }</>);
}

export default HomePage;