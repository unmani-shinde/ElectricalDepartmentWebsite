import React from 'react';
import { Outlet, useLocation,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { all_departments } from './database';
import { useParams } from 'react-router-dom';


function VirtualLabLandingPage() {
  const departments = ['Electronics and Telecommunication', 'Electronics', 'Electrical'];
  const location = useLocation();
  const engineeringIndex = location.state.engineeringIndex;
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [submitClicked,setSubmitClicked] = useState(false);

  const navigate = useNavigate();
  const {departmentName} = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(`Selected Year: ${year}`);
    console.log(`Selected Semester: ${semester}`);
    console.log(semester.split(" ")[1]);
    console.log(departmentName);// Convert to lowercase and replace spaces with hyphens  
    // Construct the relative path and print it for debugging

    const relativePath = `../${year.toLowerCase().replace(/\s+/g, '-')}/${semester.toLowerCase().replace(/\s+/g, '-')}`;
    console.log("Relative Path:", relativePath);
  
    // Define the route state
    // const routeState = {
    //   yearName: year,
    //   semesterName: semester,
    // };
  
    // Use the navigate function with the relative path
    navigate(relativePath);
    setSubmitClicked(true);
  };
  
  


  
  


  return (
    <div style={{ display: 'flex', flexDirection:setSubmitClicked?'column':'row',justifyContent: 'center', alignItems: 'center', height: submitClicked?'14vh':'100vh' }}>
  {/* <h1>This is the Page for {all_departments[engineeringIndex].name} Engineering.</h1> */}
  <h2>Semester Selection</h2>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:submitClicked?'row':'column'}}>
        <div>
          <label htmlFor="year">Year:</label>
          <select
            id="year"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            
            {all_departments[engineeringIndex].years.map((yearObj, index) => (
        <option key={`year-${index}`}>{yearObj.yearName}</option>
            ))}

          </select>
        </div>
        <div>
          <label htmlFor="semester">Semester:</label>
          <select
  id="semester"
  name="semester"
  value={semester}
  onChange={(e) => setSemester(e.target.value)}
>
  <option value="">Select a Semester</option>
  {all_departments[engineeringIndex].years.map((yearObj, yearIndex) => {
  if (yearObj.yearName === year) {
    return yearObj.semesters.map((semester, semesterIndex) => (
      <option key={`semester-${semesterIndex}`}>{semester.semesterName}</option>
    ));
  }
  return null; // Return null for other years
})}

  
</select>

        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <Outlet/>
      
</div>

  );
}

export default VirtualLabLandingPage;
