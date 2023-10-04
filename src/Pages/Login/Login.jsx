import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Providers/AuthProvider";
import Navbar from "../../components/Navbar/Navbar";


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.state);

    const navigate = useNavigate();

    const loginHandeler = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const pass = form.get('password');
        console.log(email, pass);

        signIn(email, pass)
        .then(res => {
            console.log(res);

            navigate(location?.state ? location.state : '/')

        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={loginHandeler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <p>Do not have an account? Please <Link to="/register" className="text-blue-700 hover:text-blue-700 hover:underline font-semibold">Register</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default Login;