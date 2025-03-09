import { Search } from "lucide-react";
const SearchBar = () => {
    return (
        <div className="flex justify-center">
            <form className="my-4 w-1/3 mx-auto rounded-full h-10 relative ">
                <input
                    type="text"
                    className="w-full h-full text-gray-500 text-xs tracking-wide outline-none border border-gray-400/50 rounded-2xl px-8"
                    placeholder="Job title, Keywords, or Company name | Location"
                />
                <Search className="size-4 absolute top-1/2 transform -translate-y-1/2 text-gray-800 left-3" />
                <button className="bg-blue-700 text-white text-sm px-3 py-1 absolute top-1/2 transform -translate-y-1/2 right-2 rounded-lg cursor-pointer">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
