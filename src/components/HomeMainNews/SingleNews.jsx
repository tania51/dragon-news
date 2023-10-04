import { Link } from "react-router-dom";


const SingleNews = ({ news }) => {

    const {image_url, title, details, _id} = news;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-10">
                <figure><img src={image_url} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600 hover:underline font-semibold">Read More</Link></p>
                        :
                        <p>{details}</p>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default SingleNews;