import Header from "../components/Header/Header";
import HomeMainNews from "../components/HomeMainNews/HomeMainNews";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import Navbar from "../components/Navbar/Navbar";
import RightSidebar from "../components/RightSidebar/RightSidebar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-5">
                <LeftSidebar></LeftSidebar>
                <HomeMainNews></HomeMainNews>
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default Home;