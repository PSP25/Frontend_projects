// src/components/Profile.jsx
import React from 'react';
import Card from '../components/Card';
import linkedinIcon from '../assets/linkedin_icon.svg';
import githubIcon from '../assets/github_icon.svg';
import leetcodeIcon from '../assets/leetcode_icon.svg';
const Profile = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Coding Profiles:</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="LeetCode"
          description="200+ Questions"
          link="https://leetcode.com/u/priyanshupanda2019/"
          linkText="View Profile"
          imageUrl={leetcodeIcon} // Replace with actual image path
        />
        <Card
          title="LinkedIn"
          description="250+ Connections"
          link="www.linkedin.com/in/priyanshusp"
          linkText="View Profile"
          imageUrl={linkedinIcon} // Replace with actual image path
        />
        <Card
          title="GitHub"
          description="20+ Repos with 200+ contributions in last 6 months"
          link="https://github.com/PSP25"
          linkText="View Profile"
          imageUrl={githubIcon} // Replace with actual image path
        />
      </div>
    </div>
  );
};

export default Profile;

