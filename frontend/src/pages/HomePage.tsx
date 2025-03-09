import NavBar from "../components/layout/NavBar";
import { Feed } from "../components/pages/Home/Feed";
import SearchBar from "../components/pages/Home/SearchBar";
import { JobType } from "../types/type";

const HomePage = () => {
    return (
        <>
            <NavBar />
            <SearchBar />
            <div className="my-4 mx-18 grid grid-cols-1 lg:grid-cols-13 gap-x-10">
                <div className="col-span-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias reprehenderit quam at quidem natus et, error nulla
                    ad officiis dolorem? Perspiciatis ratione sapiente soluta.
                    Voluptas corrupti accusamus doloremque illo ex.
                </div>
                <div className="col-span-6">
                    <Feed jobList={jobList} />
                </div>
                <div className="col-span-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias reprehenderit quam at quidem natus et, error nulla
                    ad officiis dolorem? Perspiciatis ratione sapiente soluta.
                    Voluptas corrupti accusamus doloremque illo ex.
                </div>
            </div>
        </>
    );
};

export default HomePage;
