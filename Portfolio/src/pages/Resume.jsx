// src/components/Resume.jsx
// import React from 'react';
              //only link
// const Resume = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold">Resume</h1>
//       <p className="mt-2">
//         <a href="https://drive.google.com/file/d/1JGcJGIG0hTSCo9-cBm6rs94P_zhOV_PH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//           View My Resume
//         </a>
//       </p>
//     </div>
//   );
// };

// export default Resume;

                          //preview
// import React from 'react';

// const Resume = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold">Resume</h1>
//       <div className="mt-2">
//         <iframe
//           title="Resume"
//           className="w-full h-full"
//           src="https://drive.google.com/file/d/1JGcJGIG0hTSCo9-cBm6rs94P_zhOV_PH/preview"
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Resume;


// preview with correct height

import React, { Suspense } from 'react';
import LoadSpinner from './LoadSpinner';
// import Iframe from './Iframe';
const Resumeframe=React.lazy(()=>import('./Iframe'))
const Resume = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center h-full bg-yellow-50">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <div className="mt-2" style={{ height: '80vh', width: '100%' }}>
        {/* <iframe
          title="Resume"
          className="w-full h-full"
          src="https://drive.google.com/file/d/1JGcJGIG0hTSCo9-cBm6rs94P_zhOV_PH/preview"
          frameBorder="0"
          allowFullScreen
        ></iframe> */}
        <Suspense fallback={<LoadSpinner/>}>
          <Resumeframe/>
        </Suspense>
      </div>
    </div>
  );
};

export default Resume;




