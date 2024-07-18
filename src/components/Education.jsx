// import React from "react";

// const Education = () => {
//   return (
//     <div
//       className="max-w-[1200px] mx-auto grid md:grid-cols-1 gap-6 p-10 md:p-0 md:py-40"
//       id="education"
//     >
//       <h2 className="text-4xl font-bold text-center mb-10 text-white  bg-primary-color rounded-full">
//         Education
//       </h2>
//       <div className="bg-[#202121] rounded-lg shadow-lg p-6 mb-6">
//         <h3 className="text-2xl font-bold text-primary-color mb-2 text-white">
//           Bachelor of Science in Computer Science
//         </h3>
//         <p className="text-lg text-gray-300">KFUEIT (2020-2024)</p>
//       </div>
//       <div className="bg-[#202121] rounded-lg shadow-lg p-6 mb-6">
//         <h3 className="text-2xl font-bold text-primary-color mb-2 text-white">
//           Intermediate in Computer Science
//         </h3>
//         <p className="text-lg text-gray-300">
//           Punjab Group of Colleges (2018-2020)
//         </p>
//       </div>
//       <div className="bg-[#202121] rounded-lg shadow-lg p-6">
//         <h3 className="text-2xl font-bold text-primary-color mb-2 text-white">
//           Matric in Computer Science
//         </h3>
//         <p className="text-lg text-gray-300">NGSS (2016-2018)</p>
//       </div>
//     </div>
//   );
// };

// export default Education;
import React from "react";

const Education = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto grid gap-6 p-10 md:p-0 md:py-40"
      id="education"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-white bg-primary-color rounded-full py-2">
        Education
      </h2>
      <div className="bg-[#202121] rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-2xl font-bold text-primary-color mb-2 text-white">
          Bachelor of Science in Computer Science
        </h3>
        <p className="text-lg text-gray-300">KFUEIT (2020-2024)</p>
      </div>
      <div className="bg-[#202121] rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-2xl font-bold text-primary-color mb-2 text-white">
          Intermediate in Computer Science
        </h3>
        <p className="text-lg text-gray-300">
          Punjab Group of Colleges (2018-2020)
        </p>
      </div>
      <div className="bg-[#202121] rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-primary-color mb-2 text-white">
          Matric in Computer Science
        </h3>
        <p className="text-lg text-gray-300">NGSS (2016-2018)</p>
      </div>
    </div>
  );
};

export default Education;
