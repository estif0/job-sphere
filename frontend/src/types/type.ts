export interface JobType {
    _id: string;
    logo: string;
    title: string;
    company: string;
    location: string;
    duration: string;
    salary: {
        init: number;
        final: number;
    };
    description: string;
    experience: string;
    isBookmarked: boolean;
    applicantNumber: number;
}
