import NavBar from "../components/layout/NavBar";
import Bookmarked from "../components/pages/Home/Bookmarked";
import { Feed } from "../components/pages/Home/Feed";
import Filter from "../components/pages/Home/Filter";
import SearchBar from "../components/common/SearchBar";
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
            experience: "3Years",
            applicantNumber: 40,
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
            experience: "5Years",
            applicantNumber: 30,
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
            experience: "4Years",
            applicantNumber: 25,
        },
        {
            id: 4,
            logo: "https://placehold.co/400",
            title: "UX Designer",
            company: "Creative Studio",
            location: "Los Angeles",
            duration: "Full-time",
            salary: {
                init: 70000,
                final: 100000,
            },
            description:
                "Design and improve user interfaces for web and mobile applications. Conduct user research and usability testing. Collaborate with product managers and developers to create intuitive and user-friendly designs. Create wireframes, prototypes, and high-fidelity mockups.",
            isBookmarked: true,
            experience: "3Years",
            applicantNumber: 20,
        },
        {
            id: 5,
            logo: "https://placehold.co/400",
            title: "Marketing Specialist",
            company: "Market Leaders",
            location: "Miami",
            duration: "Full-time",
            salary: {
                init: 60000,
                final: 90000,
            },
            description:
                "Develop and execute marketing campaigns. Analyze market trends and customer behavior. Create content for social media, email, and other marketing channels. Collaborate with sales and product teams to align marketing strategies with business goals.",
            isBookmarked: false,
            experience: "2Years",
            applicantNumber: 35,
        },
        {
            id: 6,
            logo: "https://placehold.co/400",
            title: "DevOps Engineer",
            company: "Cloud Solutions",
            location: "Seattle",
            duration: "Full-time",
            salary: {
                init: 110000,
                final: 160000,
            },
            description:
                "Implement and manage CI/CD pipelines. Automate infrastructure provisioning and deployment. Monitor and optimize system performance and reliability. Collaborate with development and operations teams to ensure smooth and efficient software delivery.",
            isBookmarked: true,
            experience: "5Years",
            applicantNumber: 15,
        },
        {
            id: 7,
            logo: "https://placehold.co/400",
            title: "HR Manager",
            company: "People First",
            location: "Austin",
            duration: "Full-time",
            salary: {
                init: 75000,
                final: 105000,
            },
            description:
                "Manage recruitment and onboarding processes. Develop and implement HR policies and procedures. Oversee employee relations and performance management. Ensure compliance with labor laws and regulations. Foster a positive and inclusive workplace culture.",
            isBookmarked: false,
            experience: "6Years",
            applicantNumber: 50,
        },
        {
            id: 8,
            logo: "https://placehold.co/400",
            title: "Sales Executive",
            company: "Sales Pros",
            location: "Denver",
            duration: "Full-time",
            salary: {
                init: 65000,
                final: 95000,
            },
            description:
                "Identify and pursue new sales opportunities. Build and maintain relationships with clients. Develop and deliver sales presentations and proposals. Negotiate contracts and close deals. Meet and exceed sales targets and quotas.",
            isBookmarked: false,
            experience: "3Years",
            applicantNumber: 45,
        },
        {
            id: 9,
            logo: "https://placehold.co/400",
            title: "Customer Support Specialist",
            company: "Support Hub",
            location: "Remote",
            duration: "Full-time",
            salary: {
                init: 50000,
                final: 75000,
            },
            description:
                "Provide technical support and assistance to customers. Troubleshoot and resolve customer issues. Document and track customer interactions and resolutions. Collaborate with product and engineering teams to improve customer experience.",
            isBookmarked: false,
            experience: "1Year",
            applicantNumber: 60,
        },
        {
            id: 10,
            logo: "https://placehold.co/400",
            title: "Financial Analyst",
            company: "Finance Experts",
            location: "Boston",
            duration: "Full-time",
            salary: {
                init: 85000,
                final: 120000,
            },
            description:
                "Analyze financial data and create reports. Develop financial models and forecasts. Monitor and evaluate financial performance. Provide insights and recommendations to management. Assist with budgeting and financial planning processes.",
            isBookmarked: true,
            experience: "4Years",
            applicantNumber: 55,
        },
    ];
    return (
        <>
            <NavBar />
            <SearchBar />
            <div className="my-4 mx-18 grid grid-cols-1 lg:grid-cols-13 gap-x-10">
                <div className="col-span-4">
                    <Filter />
                </div>
                <div className="col-span-6">
                    <Feed jobList={jobList} />
                </div>
                <div className="col-span-3">
                    <Bookmarked jobList={jobList} />
                </div>
            </div>
        </>
    );
};

export default HomePage;
