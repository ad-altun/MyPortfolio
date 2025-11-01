export type ProjectType = 'Fullstack' | 'Frontend' | 'Backend';

export interface ProjectData {
    id: string;
    title: string;
    period: string;
    type: ProjectType;
    image: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    description: string;
    readme: string;
}
