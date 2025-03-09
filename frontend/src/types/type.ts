export interface JobType {
    id: number;
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
    isBookmarked: boolean;
}
