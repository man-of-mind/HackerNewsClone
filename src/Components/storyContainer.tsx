import React from "react";
import styles from "./home/home.module.scss";

export interface Props {
    by: string,
    title: string,
    time: string,
    descendants: number,
    url: string
}

const StoryContainer:React.FC<Props> = ({ by, title, time, descendants, url }) => {
    return (
        <div className={styles['story-detail']}>
            <a href={url}>{title}</a>
            <div> by {by} | {time} | {descendants} comments </div>
        </div>
    )
}

export default StoryContainer;