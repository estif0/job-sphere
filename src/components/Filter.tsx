import RangeSlider from "react-range-slider-input";

export const Filter = () => {
    return (
        <div className="flex flex-col p-2 my-5 w-full h-full bg-white rounded-lg  space-y-4 shadow-xl shadow-black/50 md:w-1/3">
            <h1 className="flex justify-center font-bold text-3xl">Filter</h1>

            <div className="flex flex-col gap-1">
                <p>Date Posted</p>
                <div className="flex rounded-lg border-gray-400 border-2 h-12 m-1 outline-none focus:outline-none">
                    <select className="flex w-full ml-3 cursor-pointer">
                        <option value="">All</option>
                        <option value="24">Last 24 Hours</option>
                        <option value="7">Last 7 Days</option>
                        <option value="30">Last 30 Days</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <p>Job Type</p>
                <div className="flex-col rounded-[8px] border-gray-300 border-2 gap-4 py-3 font-[390] ml-1">
                    {[
                        "Full-Time",
                        "Part-Time",
                        "Internship",
                        "Contract",
                        "Volunteer",
                        "Hybrid",
                        "Remote",
                    ].map((type) => (
                        <div className="flex ml-3" key={type}>
                            <input
                                className="mr-2 cursor-pointer"
                                type="checkbox"
                            />
                            <label htmlFor="">{type}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <p>Location</p>
                <div className="flex rounded-[8px] border-gray-300 border-2 gap-2 p-1 ml-1 font-[390] cursor-pointer">
                    <input
                        type="text"
                        placeholder="Enter your location"
                        className="outline-none w-full"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <p>Experience Level</p>
                <div className="flex rounded-[8px] border-gray-300 border-2 h-[33px] ml-1">
                    <select className="flex w-full ml-3 font-[300] cursor-pointer">
                        <option value="">All</option>
                        <option value="Entry Level">Entry Level</option>
                        <option value="Mid Level">Mid Level</option>
                        <option value="Senior Level">Senior Level</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-7">
                <p>Salary Range</p>
                <RangeSlider min={200} max={120000} />
            </div>

            <div className="flex flex-col gap-1">
                <p className="flex ml-21">Input Manually</p>
                <div className="flex font-[390] justify-center gap-7">
                    <div className="flex gap-1">
                        <p>From</p>
                        <input
                            type="text"
                            className="flex w-[37px] h-[23px] rounded-[8px] border-gray-300 border-2 cursor-pointer focus:w-[100px] focus:h-[30px] transition-all duration-100 outline-none"
                        />
                    </div>

                    <div className="flex gap-1">
                        <p>To</p>
                        <input
                            type="text"
                            className="flex w-[37px] h-[23px] rounded-[8px] border-gray-300 border-2 cursor-pointer justify-center focus:w-[100px] focus:h-[30px] transition-all duration-100 outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <p>Currency</p>
                <div className="flex rounded-[8px] border-gray-300 border-2 h-[33px] ml-1">
                    <select className="flex w-full ml-3 font-[300] cursor-pointer">
                        <option value="">All</option>
                        <option value="USD">Dollar ($)</option>
                        <option value="EUR">Euro (€)</option>
                        <option value="GBP">Pound (£)</option>
                        <option value="ETB">Birr</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-center font-[600]">
                <button className="bg-[#0034D1] w-full h-[40px] text-white px-4 py-2 rounded-md cursor-pointer">
                    Reset all filter
                </button>
            </div>
        </div>
    );
};
