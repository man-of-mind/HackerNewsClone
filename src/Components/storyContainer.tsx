import React from "react";
import styles from "./home/home.module.scss";

export interface Props {
    author: string,
    title: string,
    time: number,
    totalComment: number
}

const StoryContainer:React.FC<Props> = ({ author, title, time, totalComment }) => {
    return (
        <div className={styles['story-detail']}>
            <span>{title}</span>
            <div> {author} | {time} | {totalComment} comments </div>
        </div>
    )
}

export default StoryContainer;