import store from './store'; // Import the default export 'store' from store.js
export * from './slices/profileSlice';
export * from './slices/educationSlice';
export * from './slices/projectSlice';
// Export other slices as needed

export { store }; // Re-export the 'store' for easy access









// import store from './store.js'
// import { 
//   addProfile, 
//   updateProfile, 
//   deleteProfile 
// } from './slices/profileSlice';

// import { 
//   updateCurrentEducation, 
//   updateIntermediateEducation, 
//   updateMatriculationEducation 
// } from './slices/educationSlice';

// import { 
//   addProject, 
//   updateProject, 
//   deleteProject 
// } from './slices/projectSlice';

// export { 
//   store, 
//   addProfile, 
//   updateProfile, 
//   deleteProfile, 
//   updateCurrentEducation, 
//   updateIntermediateEducation, 
//   updateMatriculationEducation, 
//   addProject, 
//   updateProject, 
//   deleteProject 
// };
// export default index;
