import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import RightSidebar from "../RightSidebar/RightSidebar";


const NewsDetails = () => {
    const { id } = useParams();
    const news = useLoaderData();

    const singleNews = news.find(anews => anews._id === id);
    const { image_url, title, details } = singleNews;
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={image_url} alt={title} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;