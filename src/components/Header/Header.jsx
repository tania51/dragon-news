import logo from '../../../src/assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <div>
            <div className='text-center space-y-2'>
                <img className='mx-auto mt-7 w-96' src={logo} alt="Dragon News Logo" />
                <p>Journalism Without Fear or Favour</p>
                <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='flex bg-slate-50 p-2 rounded-sm mt-6'>
                <button className="btn btn-secondary px-5 rounded-none">Latest</button>
                <Marquee>
                    Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </div>
    );
};

export default Header;