import React from "react";
import {useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import { all_departments } from "./database";
  
  const labs = [
    'Lab 1',
    'Lab 2',
    'Lab 3',
    // Add more lab options here
  ];




function LabSelectionandDetailsPage() {

    const location = useLocation();
    const yearName = location.state.yearName;
    const semesterName = location.state.semesterName;
    const labName = location.state.labName;
    const engineeringIndex = location.state.engineeringIndex;
    
  


    return(
    
      <div>

        <h1>You have navigated to the new page.</h1>
        <h1>Year Name: {yearName}</h1>
        <h1>Semester Name: {semesterName}</h1>
        <h1>Lab Name: {labName}</h1>
    
    
      </div>
  )
    
}

export default LabSelectionandDetailsPage;