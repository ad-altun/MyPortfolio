export type ProjectType = 'Fullstack' | 'Frontend' | 'Backend';

export interface ProjectData {
    id: string;
    title: string;
    period: string;
    type: ProjectType;
    image: string;
    technologies: string[];
    demoUrl?: {
        url: string,
        disabled?: boolean,
    };
    githubUrl?: string;
    description: string;
    readme: string;
}
