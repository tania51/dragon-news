import { useEffect, useState } from "react";
import SingleNews from "./SingleNews";


const HomeMainNews = () => {
    const [news, setNews] = useState([])

    useEffect( () => {
        fetch('/news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])

    return (
        <div className="col-span-2">
            {
                news.map(singleNews => <SingleNews key={singleNews._id} news={singleNews}></SingleNews>)
            }
        </div>
    );
};

export default HomeMainNews;