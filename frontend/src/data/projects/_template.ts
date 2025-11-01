import { type ProjectData } from '../projectTypes.ts';

/**
 * Template for creating a new project
 *
 * Steps to add a new project:
 * 1. Copy this file and rename it to your project name (e.g., myproject.ts)
 * 2. Fill in all the fields below
 * 3. Import this file in src/data/projects/index.ts
 * 4. Add it to the projectsRegistry object
 *
 * Example:
 * import { myProjectData } from './myproject';
 *
 * export const projectsRegistry: Record<string, ProjectData> = {
 *     pertitrack: pertitrackData,
 *     myproject: myProjectData,
 * };
 */

export const templateProjectData: ProjectData = {
    // Unique identifier for the project (used in URLs)
    id: 'project-id',

    // Project title
    title: 'Project Title',

    // Time period of the project
    period: 'Month Year - Present/Month Year',

    // Type of project: 'Fullstack' | 'Frontend' | 'Backend'
    type: 'Fullstack',

    // URL to project screenshot/image
    image: 'https://example.com/image.png',

    // Array of technologies used
    technologies: [
        'Technology 1',
        'Technology 2',
        'Technology 3',
    ],

    // Optional: Live demo URL
    demoUrl: 'https://demo.example.com',

    // GitHub repository URL
    githubUrl: 'https://github.com/username/repo',

    // Short description for the project card (2-3 sentences)
    description: 'Brief description of the project that appears on the project card.',

    // Full README content in markdown format
    // This appears on the project detail page
    readme: `
# Project Title

Detailed project description goes here.

## Features

- Feature 1
- Feature 2
- Feature 3

## Tech Stack

### Backend
- Technology details

### Frontend
- Technology details

### DevOps
- Technology details

## Architecture

Description of project architecture...

## Security Features

- Security feature 1
- Security feature 2

## Performance

- Performance optimization 1
- Performance optimization 2

## Testing

- Testing approach

## Deployment

Deployment details...

## Key Learnings

- Learning 1
- Learning 2

## Future Enhancements

- Enhancement 1
- Enhancement 2
`,
};