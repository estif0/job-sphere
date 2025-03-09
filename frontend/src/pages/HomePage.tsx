import NavBar from "../components/layout/NavBar";
import SearchBar from "../components/pages/Home/SearchBar";

const HomePage = () => {
    return (
        <>
            <NavBar />
            <SearchBar />
            <div className="flex justify-between space-x-12">
                <div className="box1">a</div>
                <div className="box2">b</div>
                <div className="box3">c</div>
            </div>
        </>
    );
};

export default HomePage;
