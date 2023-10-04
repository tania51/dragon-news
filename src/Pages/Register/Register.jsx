import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Providers/AuthProvider";
import Navbar from "../../components/Navbar/Navbar";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const registerHandeler = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo')
        const email = form.get('email');
        const pass = form.get('password');

        createUser(email, pass)
        .then(result=> console.log(result))
        .catch(error => console.error(error))
        console.log(name, photo, email, pass);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={registerHandeler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                                    <p>Already have an account? Please <Link to="/login" className="text-blue-700 hover:text-blue-700 hover:underline font-semibold">Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default Register;