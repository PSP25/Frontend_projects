import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profiles: [
    {
      id: 1,
      name: 'LeetCode',
      link: 'https://leetcode.com/u/priyanshupanda2019/',
      imageUrl: 'Portfolio/src/assets/leetcode_icon.svg',
    },
    {
      id: 2,
      name: 'LinkedIn',
      link: 'www.linkedin.com/in/priyanshusp',
      imageUrl: 'Portfolio/src/assets/linkedin_icon.svg',
    },
    {
      id: 3,
      name: 'GitHub',
      link: 'https://github.com/PSP25',
      imageUrl: 'Portfolio/src/assets/github.jpg',
    },
    // Add other profiles as needed
  ],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
    updateProfile: (state, action) => {
      const { id, name, link, imageUrl } = action.payload;
      const existingProfile = state.profiles.find(profile => profile.id === id);
      if (existingProfile) {
        existingProfile.name = name;
        existingProfile.link = link;
        existingProfile.imageUrl = imageUrl;
      }
    },
    deleteProfile: (state, action) => {
      state.profiles = state.profiles.filter(profile => profile.id !== action.payload.id);
    },
  },
});

export const { addProfile, updateProfile, deleteProfile } = profileSlice.actions;
export default profileSlice.reducer;
