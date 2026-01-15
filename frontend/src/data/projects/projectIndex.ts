import { type ProjectData } from '../projectTypes';
import { pertitrackProjectData } from './pertitrack';
import { restCountriesProjectData } from "./restCountries";
import { warehouseProjectData } from "./warehouse";
import { emergencywatchProjectData } from "./emergencywatch"

/**
 * Central registry of all portfolio projects
 * To add a new project:
 * 1. Create a new file in src/data/projects/
 * 2. Import it here
 * 3. Add it to the projectsRegistry object
 */
export const projectsRegistry: Record<string, ProjectData> = {
    emergencywatch: emergencywatchProjectData,
    pertitrack: pertitrackProjectData,
    restCountries: restCountriesProjectData,
    warehouse: warehouseProjectData,
};

/**
 * Get all projects as an array for listing
 */
export const getAllProjects = (): ProjectData[] => {
    return Object.values(projectsRegistry);
};

/**
 * Get a specific project by ID
 */
export const getProjectById = (id: string): ProjectData | undefined => {
    return projectsRegistry[id];
};

/**
 * Get projects filtered by type
 */
export const getProjectsByType = (type: ProjectData['type']): ProjectData[] => {
    return getAllProjects().filter((project) => project.type === type);
};