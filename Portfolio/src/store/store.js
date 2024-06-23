import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profileSlice';
import educationReducer from './slices/educationSlice';
import projectReducer from './slices/projectSlice';
// Import other reducers as needed

const store = configureStore({
  reducer: {
    profile: profileReducer,
    education: educationReducer,
    project: projectReducer,
    // Add other reducers here
  },
});

export default store; // Export the store as default


