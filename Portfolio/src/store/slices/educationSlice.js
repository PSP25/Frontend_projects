import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: {
    institution: 'XYZ University',
    degree: 'B.S. in Computer Science',
    year: '2024',
    board: 'XYZ Board',
    gpa: '3.8/4.0',
  },
  intermediate: {
    institution: 'ABC Higher Secondary School',
    year: '2020',
    board: 'ABC Board',
    percentage: '85%',
  },
  matriculation: {
    institution: 'DEF High School',
    year: '2018',
    board: 'DEF Board',
    percentage: '90%',
  },
};

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    updateCurrentEducation: (state, action) => {
      state.current = { ...state.current, ...action.payload };
    },
    updateIntermediateEducation: (state, action) => {
      state.intermediate = { ...state.intermediate, ...action.payload };
    },
    updateMatriculationEducation: (state, action) => {
      state.matriculation = { ...state.matriculation, ...action.payload };
    },
  },
});

export const { updateCurrentEducation, updateIntermediateEducation, updateMatriculationEducation } = educationSlice.actions;
export default educationSlice.reducer;
