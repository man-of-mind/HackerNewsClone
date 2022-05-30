import { useEffect, useState } from "react";
import axios from "axios";
import { Props } from "./Components/storyContainer";


function unixTimeConverter(unixTime: number) {
    let dateTime = new Date(unixTime * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = dateTime.getFullYear();
    let month = months[dateTime.getMonth()];
    let date = dateTime.getDate();
    let hour = dateTime.getHours();
    let formatHour = "";
    let day = "";
    if (hour < 12) {
        formatHour = '0' + hour;
        day = "AM";
    } else if (hour === 12) {
        formatHour = String(hour);
        day = "PM";
    } else {
        let format = hour - 12;
        formatHour = format < 10 ? '0' + format : String(format)
        day = "PM";
    }
    let min = dateTime.getMinutes() < 10 ? '0' + dateTime.getMinutes() : dateTime.getMinutes();
    let sec = dateTime.getSeconds() < 10 ? '0' + dateTime.getSeconds() : dateTime.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + formatHour + ':' + min + ':' + sec + ' ' + day;
    
    return time;
}

export const GetData = (category: string) => {
    const storiesIds = `https://hacker-news.firebaseio.com/v0/${category}.json?print=pretty`;
    const [allStories, setStories] = useState<Array<Props>>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(storiesIds).then((response) => {
            let storiesIds = response.data.slice(0, 99);
            let allUrls: string[] = [];
            storiesIds.forEach((element: number) => {
                allUrls.push(`https://hacker-news.firebaseio.com/v0/item/${element}.json?print=pretty`)
            });
            axios.all(allUrls.map((url) => axios.get(url))).then((response) => {
                let result = response.map((res) => {
                    let time = unixTimeConverter(res.data.time);
                    res.data.time = time;
                    return res.data
                })
                setStories(result);
                setLoading(false);
            })
        }).catch((err) => {
            console.log(err.message);
        })
    }, [storiesIds]);

    return {stories: allStories, state: loading};
}