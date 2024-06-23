import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      id: 1,
      title: 'Project 1',
      description: 'Technologies used: React, Node.js',
      link: 'https://github.com/your-project-repo',
      imageUrl: '/path/to/project-image.png',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Technologies used: React, Node.js',
      link: 'https://github.com/your-project-repo',
      imageUrl: '/path/to/project-image.png',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Technologies used: React, Node.js',
      link: 'https://github.com/your-project-repo',
      imageUrl: '/path/to/project-image.png',
    },
    // Add other projects as needed
  ],
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const { id, title, description, link, imageUrl } = action.payload;
      const existingProject = state.projects.find(project => project.id === id);
      if (existingProject) {
        existingProject.title = title;
        existingProject.description = description;
        existingProject.link = link;
        existingProject.imageUrl = imageUrl;
      }
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(project => project.id !== action.payload.id);
    },
  },
});
export const { addProject, updateProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;

