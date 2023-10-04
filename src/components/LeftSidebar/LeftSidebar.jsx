import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Sports from "./Sports";


const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    // news fetch
    useEffect( () => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data));
    }, [])

    const sportNews = news.filter((sportNews) => sportNews.category_id === '4');

    return (
        <div>
            <p className="font-semibold text-xl mb-5">All Caterogy</p>
            <div className="space-y-2 ml-4">
                {
                    categories.map(category => <NavLink 
                        className={({ isActive }) =>
                    isActive ? 
                    'bg-slate-100 block' : 
                    'text-slate-500 block'
                  } 
                  key={category.id} to={`category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>

            {/* news card */}
            <div className="mt-6">
                {sportNews.map(sport => <Sports key={sport._id} sport={sport}></Sports>)}
            </div>
        </div>
    );
};
export default LeftSidebar;