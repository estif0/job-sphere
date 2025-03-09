import NavBar from "../components/layout/NavBar";
import { Feed } from "../components/pages/Home/Feed";
import SearchBar from "../components/pages/Home/SearchBar";
import { JobType } from "../types/type";

const HomePage = () => {
    const jobList: JobType[] = [
        {
            id: 1,
            logo: "https://placehold.co/400",
            title: "Software Engineer",
            company: "Tech Corp",
            location: "San Francisco",
            duration: "Full-time",
            salary: {
                init: 100000,
                final: 150000,
            },
            description:
                "Develop and maintain web applications. Collaborate with cross-functional teams to define, design, and ship new features. Ensure the performance, quality, and responsiveness of applications. Identify and correct bottlenecks and fix bugs. Help maintain code quality, organization, and automation.",
            isBookmarked: false,
        },
        {
            id: 2,
            logo: "https://placehold.co/400",
            title: "Product Manager",
            company: "Business Inc",
            location: "New York",
            duration: "Full-time",
            salary: {
                init: 90000,
                final: 130000,
            },
            description:
                "Oversee product development from ideation to launch. Work closely with engineering, design, and marketing teams to deliver high-quality products. Conduct market research and analyze industry trends. Define product vision, strategy, and roadmap. Prioritize features and manage the product backlog.",
            isBookmarked: false,
        },
        {
            id: 3,
            logo: "https://placehold.co/400",
            title: "Data Scientist",
            company: "DataWorks",
            location: "Chicago",
            duration: "Contract",
            salary: {
                init: 80000,
                final: 120000,
            },
            description:
                "Analyze and interpret complex data sets. Develop and implement data models and algorithms. Work with stakeholders to identify opportunities for leveraging company data. Build predictive models and machine-learning algorithms. Present findings and insights to non-technical audiences.",
            isBookmarked: false,
        },
    ];
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
