import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <p className="font-semibold text-lg mb-5">Login With</p>
            <div className='space-y-2'>
                <button className="btn btn-outline btn-info w-full"> <FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn btn-outline w-full"> <FaGithub></FaGithub> Login With Github</button>
            </div>
            <div>
                <p className="text-lg font-medium mt-10 mb-5">
                    Find Us On
                </p>
                <button className="btn w-full bg-white border-t rounded-b-none border-slate-400">
                    <FaFacebookF className='text-blue-800'></FaFacebookF>
                    Facebook
                </button>
                <button className="btn w-full bg-white border-y-0 rounded-none rounded-b-none border-slate-400">
                    <FaTwitter className='text-sky-800'></FaTwitter>
                    Twitter
                </button>
                <button className="btn w-full bg-white border-t rounded-t-none border-slate-400">
                    <FaInstagram className='text-red-600'></FaInstagram>
                    Facebook
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;