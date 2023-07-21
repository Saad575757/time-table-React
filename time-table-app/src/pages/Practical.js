// import React, { useState } from 'react';
// import Header from './Header';
// import './Adddepartment.css';
// import axios from "axios";


// const Practical = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [teachers, setTeachers] = useState([]);
  
// const options = {
//   method: 'GET',
//   url: 'http://localhost:1337/api/addcourses',
//   headers: {'Content-Type': 'application/json'}
// };

// axios.request(options).then(function (response) {
//   console.log(response.data.data[0]);
// }).catch(function (error) {
//   console.error(error);
// });
// function displayDataInTable(data) {
//   const table = document.querySelector("#departmentstable");
//   const tableBody = table.querySelector("tbody");

//   // Clear existing table rows
//   tableBody.innerHTML = "";

//   data.data.forEach((item) => {
//     const rowData = item.attributes;

//     const CourseCode = rowData.department
//   });
// }

//   const handleClick = () => {
//     setShowForm(!showForm);
//   };

//   const handleFormSubmit = (courseCode, courseName, facultyNo, facultyName) => {
//     const newTeacher = {
//       CourseCode: courseCode,
//       courseName: courseName,
//       facultyNo: facultyNo,
//       facultyName: facultyName,
//     };
//     setTeachers([...teachers, newTeacher]);
//     setShowForm(false);
//   };

//   return (
//     <>
//       <Header />
      
//       <div>
//         <button onClick={handleClick} className="button">
//           Allot
//         </button>

//         {showForm && (
//           <div className="popup">
//             <div className="blur-background"></div>
//             <div className="form-container">
//               <FormComponent onClose={handleClick} onFormSubmit={handleFormSubmit} />
//             </div>
//           </div>
//         )}

//         {teachers.length > 0 && (
//           <div className="teacher-table">
//             <h2>Allotment of Practical courses</h2>
//             <table className="">
//               <thead>
//                 <tr>
//                   <th>Course Code</th>
//                   <th>Course Name</th>
//                   <th>Faculty No</th>
//                   <th>Faculty Name</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {teachers.map((teacher, index) => (
//                   <tr key={index}>
//                     <td>{teacher.courseCode}</td>
//                     <td>{teacher.courseName}</td>
//                     <td>{teacher.facultyNo}</td>
//                     <td>{teacher.facultyName}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// function FormComponent({ onClose, onFormSubmit }) {
//   const [courseCode, setCourseCode] = useState('');
//   const [courseName, setCourseName] = useState('');
//   const [facultyNo, setFacultyNo] = useState('');
//   const [facultyName, setFacultyName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onFormSubmit(courseCode, courseName, facultyNo, facultyName);
//   };

//   return (
//     <form className="form-department" onSubmit={handleSubmit}>
//       <button className="close-button" onClick={onClose}>
//         &#x2715;
//       </button>
//       <div className="form-group">
//         <label htmlFor="courseCode">Course Code</label>
//         <select
//           id="courseCode"
//           value={courseCode}
//           onChange={(e) => setCourseCode(e.target.value)}
//           className='select-style'
//           required
//         >
//         <option value="">Select Course Code</option>
//           <option value="CSE101">{CourseCode}</option>
//           <option value="CSE201">CSE201</option>
//           {/* Add more options as needed */}
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="courseName">Course Name</label>
//         <select
//           id="courseName"
//           value={courseName}
//           onChange={(e) => setCourseName(e.target.value)}
//           className='select-style'
//           required
//         >
//         <option value="">Select Course</option>
//           <option value="Introduction to Computer Science">Introduction to Computer Science</option>
//           <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
//           {/* Add more options as needed */}
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="facultyNo">Faculty No</label>
//         <select
//           id="facultyNo"
//           value={facultyNo}
//           onChange={(e) => setFacultyNo(e.target.value)}
//           className='select-style'
//           required
//         >
//         <option value=""> Select FacultyNo</option>
//           <option value="FAC101">FAC101</option>
//           <option value="FAC201">FAC201</option>

//           {/* Add more options as needed */}
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="facultyName">Faculty Name</label>
//         <select
//           id="facultyName"
//           value={facultyName}
//           onChange={(e) => setFacultyName(e.target.value)}
//           className='select-style'
//           required
//         >
//         <option value="">Select facultyName</option>
//           <option value="John Doe">John Doe</option>
//           <option value="Jane Smith">Jane Smith</option>
//           {/* Add more options as needed */}
//         </select>
//       </div>
//       <div className="form-group">
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Practical;
import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Adddepartment.css';
import axios from 'axios';

const Practical = () => {
  const [showForm, setShowForm] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [courseCodes, setCourseCodes] = useState([]);
  const [courseNames, setCourseNames] = useState([]);
  const [facultyNames, setFacultyNames] = useState([]);
  const [facultyNumbers, setFacultyNumbers] = useState([]);

  useEffect(() => {
    // Fetch course codes from the API when the component mounts
    axios
      .get('http://localhost:1337/api/addcourses')
      .then((response) => {
        const courseCodesFromAPI = response.data.data.map((item) => item.attributes.course_code);
        const courseNamesFromAPI = response.data.data.map((item) => item.attributes.course_name);
        setCourseNames(courseNamesFromAPI);
        setCourseCodes(courseCodesFromAPI);
      })
      .catch((error) => {
        console.error(error);
      });
      axios
      .get('http://localhost:1337/api/addteachers')
      .then((response) => {
        const facultyNamesFromAPI = response.data.data.map((item) => item.attributes.faculty_name);
        const facultyNumbersFromAPI = response.data.data.map((item) => item.attributes.faculty_number);
        setFacultyNames(facultyNamesFromAPI);
        setFacultyNumbers(facultyNumbersFromAPI);
      })
      .catch((error) => {
        console.error(error);
      });
    
  }, []);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (courseCode, courseName, facultyNo, facultyName) => {
    const newTeacher = {
      courseCode: courseCode,
      courseName: courseName,
      facultyNo: facultyNo,
      facultyName: facultyName,
    };
    setTeachers([...teachers, newTeacher]);
    setShowForm(false);
  };

  return (
    <>
      <Header />

      <div>
        <button onClick={handleClick} className="button">
          Allot
        </button>

        {showForm && (
          <div className="popup">
            <div className="blur-background"></div>
            <div className="form-container">
              <FormComponent
                onClose={handleClick}
                onFormSubmit={handleFormSubmit}
                courseCodes={courseCodes}
                courseNames={courseNames}
                facultyNames={facultyNames}
                facultyNumbers={facultyNumbers}
              />
            </div>
          </div>
        )}

        {teachers.length > 0 && (
          <div className="teacher-table">
            <h2>Allotment of Practical courses</h2>
            <table className="">
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Faculty No</th>
                  <th>Faculty Name</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr key={index}>
                    <td>{teacher.courseCode}</td>
                    <td>{teacher.courseName}</td>
                    <td>{teacher.facultyNo}</td>
                    <td>{teacher.facultyName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

function FormComponent({ onClose, onFormSubmit, courseCodes,courseNames,facultyNames, facultyNumbers }) {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [facultyNo, setFacultyNo] = useState('');
  const [facultyName, setFacultyName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(courseCode, courseName, facultyNo, facultyName);
  };

  return (
    <form className="form-department" onSubmit={handleSubmit}>
      <button className="close-button" onClick={onClose}>
        &#x2715;
      </button>
      <div className="form-group">
        <label htmlFor="courseCode">Course Code</label>
        <select
          id="courseCode"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          className="select-style"
          required
        >
          <option value="">Select Course Code</option>
          {courseCodes.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <label htmlFor="courseName">Course Name</label>
        <select
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="select-style"
          required
        >
          <option value="">Select Course Name</option>
          {courseNames.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <label htmlFor="facultyName">Faculty Name</label>
        <select
          id="facultyName"
          value={facultyName}
          onChange={(e) => setFacultyName(e.target.value)}
          className="select-style"
          required
        >
          <option value="">Select Faculty Name</option>
          {facultyNames.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <label htmlFor="facultyNo">Faculty Number</label>
        <select
          id="facultyNo"
          value={facultyNo}
          onChange={(e) => setFacultyNo(e.target.value)}
          className="select-style"
          required
        >
          <option value="">Select Faculty Number</option>
          {facultyNumbers.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <div className="form-group">
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
   
      </div>
    </form>
  );
}

export default Practical;
