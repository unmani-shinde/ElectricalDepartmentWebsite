import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { all_departments } from './database';
import { useParams } from 'react-router-dom';
import { FaSearch  } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";

function VirtualLabLandingPage() {
  const location = useLocation();
  const { departmentName } = useParams();
  const navigate = useNavigate();
  const engineeringIndex = location.state?.engineeringIndex;

  // Extract engineeringIndex from location.state
  
  

  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [lab,setLab] = useState('');
  const [years, setYears] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [semesterLabs,setSemesterLabs] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false);

  function capitalizeWords(str) {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Effect to initialize years when engineeringIndex is available
  useEffect(() => {
    if (engineeringIndex >= 0) {
      const yearNames = all_departments[engineeringIndex].years.map((yearObj) => yearObj.yearName);
      setYears(yearNames);
    }
  }, [engineeringIndex]);

  // Effect to update semesters when year changes
  useEffect(() => {
    if (engineeringIndex >= 0 && year !== '') {
      const selectedYear = all_departments[engineeringIndex].years.find((yearObj) => yearObj.yearName === year);

      if (selectedYear) {
        const semesterNames = selectedYear.semesters.map((semesterObj) => semesterObj.semesterName);
        setSemesters(semesterNames);
      } else {
        console.log(`Year "${year}" not found in department "${departmentName}"`);
      }
    }
  }, [engineeringIndex, year, departmentName]);


  useEffect(() => {
    if (engineeringIndex >= 0 && year !== '' && semester !== '') {
      const selectedLabs = all_departments[engineeringIndex].years
        .find((yearObj) => yearObj.yearName === year)
        .semesters.find((semesterObj) => semesterObj.semesterName === semester)?.labs || [];
  
      setSemesterLabs(selectedLabs);
    }
  }, [engineeringIndex, year, semester]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(engineeringIndex);
    console.log(all_departments[engineeringIndex].name)
    const routeState = {
      engineeringIndex: engineeringIndex,
      yearName: year,
      semesterName: semester,
      labName:lab
    };

    const fullPath = `/virtual-lab/${departmentName}/labs/`;
    navigate(fullPath, { state: routeState });

    setSubmitClicked(true);
  };

  return (

   
    <div className='card' style={{
      height: '96vh',
      width: '96vw',
      marginTop: '2vh',
      marginLeft: '1.5vw',
      alignSelf: 'center',
      borderRadius: '20px',
      border: 'solid 2px #247881',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      background: 'linear-gradient(to right, #CDFFF0, #64CCC5)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p style={{ marginTop:'1vh',marginBottom: '20px',fontSize:"xxx-large",fontWeight:'700',color:"black",}}>{all_departments[engineeringIndex].name} Engineering Virtual Lab</p>
      
        
        <div style={{display:'flex',flexDirection:'row',fontSize:'x-large',marginTop:'-1vh',marginBottom:'1vh'}}>
          <div style={{display:'flex',flexDirection:'row'}}>
            <label htmlFor="year" style={{marginRight:'1vw', fontWeight:"700",lineHeight:'3vh'}}>Select<br></br>Year:</label>
            <select
              id="year"
              name="year"
              value={year}
              style={{fontSize:'x-large',marginRight:'2vw',width:'20vw',marginTop:'-0.5vh',paddingLeft:'0.5vw',}}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              <option value=''>Select Year</option>
              {years.map((yearName, index) => (
                <option key={index} value={yearName}>
                  {yearName}
                </option>
              ))}
            </select>
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
            <label htmlFor="semester" style={{marginRight:'1vw',fontWeight:'700',lineHeight:'3vh'}}>Select <br></br>Semester:</label>
            <select
              id="semester"
              name="semester"
              value={semester}
              style={{fontSize:'x-large',marginRight:'2vw',width:'20vw',marginTop:'-0.5vh',paddingLeft:'0.5vw'}}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="">Select a Semester</option>
              {semesters.map((semesterName, index) => (
                <option key={index} value={semesterName}>
                  {semesterName}
                </option>
              ))}
            </select>
          </div>

          <div style={{display:'flex',flexDirection:'row'}}>
          <label htmlFor="labs" style={{marginRight:'1vw',fontWeight:'700',lineHeight:'3vh'}}>Select <br></br>Lab:</label>
          <select onChange={(e)=>{setLab(e.target.value)}} style={{fontSize:'x-large',width:'20vw',paddingLeft:'0.5vw',height:'7vh',marginTop:'-0.5vh'}}>
        <option value=''>Select A Lab</option>
        {semesterLabs.map((labObject, index) => (
            <option key={index} value={labObject.labName}>
            {labObject.labName}
            </option>
        ))}
        </select>
          </div>


          
          <button
  onClick={handleSubmit}
  style={{
    fontSize: 'x-large',
    cursor:'pointer',    
    fontWeight: '700',
    marginLeft: '1vw',
    paddingTop:'0.75vh',
    backgroundColor:'transparent',
    border:'1px solid transparent',
    borderRadius:'50%',
    width: '6vh', // Set the width to make it a square
    height: '6vh', // Set the height to make it a square
  }}
>
  <FcSearch style={{transform:'scale(2)'}} />
</button>

          
        </div>
        <hr style={{width:'90%'}}></hr>
      
      <Outlet />
    </div>



    </div>

    

    



    
  );
}

export default VirtualLabLandingPage;
