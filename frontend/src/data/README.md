# Project Data Structure

This directory contains all portfolio project data in a centralized, scalable structure.

## Structure

```
frontend/src/data/
├── projectTypes.ts           # TypeScript type definitions
└── projects/
    ├── index.ts              # Central registry & helper functions
    ├── pertitrack.ts         # PerTiTrack project data
    ├── _template.ts          # Template for new projects
    └── [new-project].ts     # Add new projects here
```

## Adding a New Project

Follow these steps to add a new project to your portfolio:

### Step 1: Create Project Data File

1. Copy `_template.ts` and rename it to your project name (e.g., `ecommerce.ts`)
2. Fill in all the required fields:
    - `id`: Unique identifier (used in URLs, e.g., "ecommerce")
    - `title`: Display name (e.g., "E-Commerce Platform")
    - `period`: Time range (e.g., "January 2025 - March 2025")
    - `type`: 'Fullstack', 'Frontend', or 'Backend'
    - `image`: Screenshot URL
    - `technologies`: Array of tech stack items
    - `demoUrl`: (Optional) Live demo link
    - `githubUrl`: (Optional) Repository link
    - `description`: Short summary for project card
    - `readme`: Full markdown content for detail page

### Step 2: Register Your Project

Open `projects/index.ts` and:

1. Import your project data:
```typescript
import { ecommerceData } from './ecommerce';
```

2. Add it to the registry:
```typescript
export const projectsRegistry: Record<string, ProjectData> = {
    pertitrack: pertitrackData,
    ecommerce: ecommerceData,  // Add your new project here
};
```

### Step 3: That's It!

Your project will automatically appear:
- In the Projects list page
- With its own detail page at `/projects/your-project-id`

## Example

```typescript
// frontend/src/data/projects/myapp.ts
import { ProjectData } from '../projectTypes';

export const myAppData: ProjectData = {
    id: 'myapp',
    title: 'My Awesome App',
    period: 'October 2025 - Present',
    type: 'Fullstack',
    image: 'https://example.com/screenshot.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://myapp.com',
    githubUrl: 'https://github.com/user/myapp',
    description: 'A brief description of my app.',
    readme: `# My Awesome App\n\nDetailed documentation here...`,
};
```

Then in `projects/index.ts`:
```typescript
import { myAppData } from './myapp';

export const projectsRegistry: Record<string, ProjectData> = {
    pertitrack: pertitrackData,
    myapp: myAppData,
};
```

## Helper Functions

The `projects/index.ts` file provides useful helper functions:

- `getAllProjects()`: Returns array of all projects
- `getProjectById(id)`: Get specific project by ID
- `getProjectsByType(type)`: Filter projects by type

## Benefits of This Structure

1. **Separation of Concerns**: Project data is separate from UI components
2. **Easy to Scale**: Add new projects by creating one file and one line of code
3. **Type Safety**: Full TypeScript support with defined types
4. **Maintainable**: Each project has its own file
5. **Reusable**: Components work for any project automatically
6. **Single Source of Truth**: One place to manage all project data

## Component Usage

Components automatically use this centralized data:

- `ProjectDetailPage.tsx`: Uses `getProjectById()` to fetch project data
- `Projects.tsx`: Uses `getAllProjects()` to list all projects
- `ProjectCard.tsx`: Receives project data as props

No need to modify components when adding new projects!