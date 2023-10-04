import { Link, NavLink } from "react-router-dom";
import userImg from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const signOutHandeler = () => {
        logOut()
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }

    const links = <div className="text-lg space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
    </div>

    return (
        <div className="navbar bg-base-100 mt-10 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userImg} />
                    </div>
                </label>
                {
                    user ? <button onClick={signOutHandeler} className="btn btn-neutral btn-sm rounded-sm px-5">Sign Out</button>
                    :
                    <Link to="/login"><button className="btn btn-neutral btn-sm rounded-sm px-5">Login</button></Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;