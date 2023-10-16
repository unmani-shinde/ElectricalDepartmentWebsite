import React from "react";
import {useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import { all_departments } from "./database";
import { useNavigate } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FcNext,FcPrevious,FcHome } from "react-icons/fc";

const page_details = [{
  buttonName:"Concepts",
  buttonURL:"",
  
},
{
  buttonName:"Diagram",
  buttonURL:"diagram",
  
},
{
  buttonName:"Observations",
  buttonURL:"observations",
}
];


export function DetailsPageOne(){

  const nav = useNavigate();

  
  const {engineeringIndex, convertedString,year, semester,labName, expNumber} = useParams();
  const experimentObj = all_departments[engineeringIndex].years
  .find((yearObj) => yearObj.yearName === year)
  .semesters.find((semesterObj) => semesterObj.semesterName === semester)
  .labs.find((labObj) => labObj.labName === labName).labExperiments[expNumber-1];
  
  return(
  <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',}}>
    <div style={{height:'90%',width:'100%',display:"flex",flexDirection:'column',overflowY:'scroll',paddingLeft:'1vw',marginTop:'2vh'}}>
        <h1 style={{marginBottom:'-3vh',color:"#22A699"}}>AIM:</h1>
        <p style={{fontSize:'x-large'}}>{experimentObj.experimentAim}</p>
       
        <h1 style={{marginBottom:'-3vh',color:"#22A699"}}>REQUIREMENTS:</h1>
        <p style={{fontSize:'x-large'}}>{experimentObj.experimentRequirements}</p>
       
        <h1 style={{marginBottom:'-3vh',color:"#22A699"}}>THEORY:</h1>
        <p style={{fontSize:'x-large'}}>{experimentObj.experimentTheory}</p>
       
        <h1 style={{marginBottom:'-3vh',color:"#22A699"}}>CONCLUSION:</h1>
        <p style={{fontSize:'x-large'}}>{experimentObj.experimentConclusion}</p>
       
    </div>    
    <div style={{height:'5%',width:'100%',marginTop:'5%',display:'flex',flexDirection:'row',justifyContent:'center',alignSelf:'center',alignItems:'center',paddingLeft:'3vw'}}>
      {page_details.map((button_detail)=>{return(
        <button style={{fontWeight:'700',marginRight:'4vw',fontSize:'large',backgroundColor:'transparent',border:'none',textDecoration:'underline',color:"#22A699"}} onClick={()=>{
          const fullPath = `/virtual-lab/${convertedString}/${engineeringIndex}/year/${year}/semester/${semester}/labs/${labName}/experiment-number/${expNumber}/${button_detail.buttonURL}`;          
          nav(fullPath);
        }}>
          {button_detail.buttonName.toUpperCase()}
        </button>
      )})}
      
      
    </div>
    
    

  </div>)

}

export function DetailsPageTwo(){
  const nav = useNavigate();

   const {engineeringIndex, convertedString,year, semester,labName, expNumber} = useParams();
  const experimentObj = all_departments[engineeringIndex].years
  .find((yearObj) => yearObj.yearName === year)
  .semesters.find((semesterObj) => semesterObj.semesterName === semester)
  .labs.find((labObj) => labObj.labName === labName).labExperiments[expNumber-1];
  
  return(
  <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>
    <div style={{height:'85%',width:'100%',display:"flex",flexDirection:'column',overflowY:'scroll'}}>
    <h1 style={{color:"#22A699",paddingLeft:'1vw'}}>DIAGRAM <IoOpenOutline/></h1>
    </div>
       
    <div style={{height:'10%',width:'100%',marginTop:'5%',display:'flex',flexDirection:'row',justifyContent:'center',alignSelf:'center',alignItems:'center',paddingLeft:'3vw'}}>
      {page_details.map((button_detail)=>{return(
        <button style={{fontWeight:'700',marginRight:'4vw',fontSize:'large',backgroundColor:'transparent',border:'none',textDecoration:'underline',color:"#22A699"}} onClick={()=>{
          const fullPath = `/virtual-lab/${convertedString}/${engineeringIndex}/year/${year}/semester/${semester}/labs/${labName}/experiment-number/${expNumber}/${button_detail.buttonURL}`;          
          nav(fullPath);
        }}>
          {button_detail.buttonName.toUpperCase()}
        </button>
      )})}
      
      
    </div>
    
    

  </div>)

}

export function DetailsPageThree(){
  const nav = useNavigate();

   const {engineeringIndex, convertedString,year, semester,labName, expNumber} = useParams();
  const experimentObj = all_departments[engineeringIndex].years
  .find((yearObj) => yearObj.yearName === year)
  .semesters.find((semesterObj) => semesterObj.semesterName === semester)
  .labs.find((labObj) => labObj.labName === labName).labExperiments[expNumber-1];
  
  return(
  <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>
    <div style={{height:'85%',width:'100%',display:"flex",flexDirection:'column',overflowY:'scroll'}}>
    <h1 style={{color:"#22A699",paddingLeft:'1vw'}}>OBSERVATIONS & TABLE:</h1>
    </div>
       
    <div style={{height:'10%',width:'100%',marginTop:'5%',display:'flex',flexDirection:'row',justifyContent:'center',alignSelf:'center',alignItems:'center',paddingLeft:'3vw'}}>
      {page_details.map((button_detail)=>{return(
        <button style={{fontWeight:'700',marginRight:'4vw',fontSize:'large',backgroundColor:'transparent',border:'none',textDecoration:'underline',color:"#22A699"}} onClick={()=>{
          const fullPath = `/virtual-lab/${convertedString}/${engineeringIndex}/year/${year}/semester/${semester}/labs/${labName}/experiment-number/${expNumber}/${button_detail.buttonURL}`;          
          nav(fullPath);
        }}>
          {button_detail.buttonName.toUpperCase()}
        </button>
      )})}
      
      
    </div>
    
    

  </div>)

}





export function ExperimentDetails(){

  const navigate = useNavigate();
  const [showToolTip,setShowToolTip] = useState(-1);
  

  

  const bottom_menu_details = [{
    buttonName:"To Previous",
    buttonURL:"/hehehehe",
    reactIconComponent:<FcPrevious/>,
    toolTipText: "Previous"
  },
  {
    buttonName:"To Lab Home",
    buttonURL:"/hehehehe2",
    reactIconComponent:<FcHome/>,
    toolTipText: "Lab Home"
  },
  {
    buttonName:"To Next",
    buttonURL:"/hehehehe3",
    reactIconComponent:<FcNext/>,
    toolTipText: "Next"
  }
];

  function convertToReadable(inputString) {
    // Split the input string by hyphens
    const parts = inputString.split('-');
    
    // Capitalize the first letter of each part and join with spaces
    const readableString = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
  
    return readableString;
  }  
  const {engineeringIndex, convertedString,year, semester,labName, expNumber} = useParams();
  return(
    
    <div className='card' style={{ height: '96vh', width: '96vw', marginTop: '2vh', marginLeft: '1.5vw', alignSelf: 'center', borderRadius: '20px', overflowY: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    border: 'solid 2px #247881',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      background: 'linear-gradient(to right, #CDFFF0, #64CCC5)',}}>
  <p style={{ marginTop: '1vh', marginBottom: '0vh', fontSize: "xxx-large", fontWeight: '700', textAlign: 'center' }}>{convertToReadable(convertedString)} Engineering Virtual Lab</p>
  <hr style={{ width: '90%' }}></hr>
  <div style={{ width: '96%',  height: '85%', alignSelf: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center',flexDirection:'column' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '1vh', marginTop: '-1vh' }}>{labName} Lab </h1>  

  <div style={{width:'100%',height:'80%',display: 'flex',flexDirection:'row',alignSelf: 'center', justifyContent: 'center',alignItems: 'center'}}>
  <div style={{width:'47%',height:"100%",backgroundColor:'white',borderRadius:'10px',marginRight:'1vw',padding:'1vw',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'}}>
    <div style={{width:'98%',height:'98%',paddingLeft:'0.75w'}}>
      <Outlet/>
    </div>
  </div>
    <div style={{width:'48%',height:"100%",display:'flex',flexDirection:'column',backgroundColor:'white',borderRadius:'10px'}}>
    <div style={{width:'100%',height:'98%',padding:"1vw"}}>
    <h1 style={{textAlign:'right',fontSize:'xxx-large',marginBottom:'-2vh',marginTop:'-1vh',marginLeft:"-3vw",color:"#22A699"}}>0{expNumber}</h1>
      <div>
      <h1 style={{color:"black",paddingLeft:'1vw',marginTop:'-5vh'}}>DEMONSTRATION <IoOpenOutline/></h1>
      </div>
    </div>
      
    </div>

    </div>
    <div style={{ width: '96%', height: '10%', display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center',paddingTop:'2vh'}}>
  {bottom_menu_details.map((buttonObj, index) => (
    <div className="tooltip" onMouseEnter={() => setShowToolTip(index)}
    onMouseLeave={() => setShowToolTip(-1)}>
    <button
      key={index}    
      style={{
        height: '7vh',
        width: '7vh',
        borderRadius: '50%',
        marginRight: '2vw',
        marginLeft: '0.5vw',
        marginTop:showToolTip==-1?'2vh':"0vh",
        fontSize: 'large',
        display: 'flex',
        border: "solid 4px #F4F4F4",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
      onClick={() => {
        if (index === 2 && expNumber < 9) {
          const fullPath = `/virtual-lab/${convertedString}/${engineeringIndex}/year/${year}/semester/${semester}/labs/${labName}/experiment-number/${(parseInt(expNumber) + 1).toString()}`;
          navigate(fullPath);
        }     
        else if (index === 0 && expNumber > 1) {
          const fullPath = `/virtual-lab/${convertedString}/${engineeringIndex}/year/${year}/semester/${semester}/labs/${labName}/experiment-number/${(parseInt(expNumber) - 1).toString()}`;
          navigate(fullPath);
        }
        else if (index === 1) {
          const departmentName = `${convertedString}-engineering`;
          const fullPath = `/virtual-lab/${departmentName}/labs`;  
          const routeState = {
            engineeringIndex: engineeringIndex,
            yearName: year,
            semesterName: semester,
            labName: labName,
          };
          navigate(fullPath, { state: routeState });
        }
      }}
    >
      <div style={{ transform: 'scale(2)', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
        {buttonObj.reactIconComponent}
      </div>
    </button>
    {(showToolTip==index)?(<span class="tooltiptext">{buttonObj.toolTipText}</span>):(<p></p>)}
  </div>
  
    

  
  ))}
</div>

    
  </div>
  
</div>

  )
}

export function AllLabs() {

  const location = useLocation();
  const year = location.state.yearName;
  const semester = location.state.semesterName;
  const lab = location.state.labName;
  const engineeringIndex = location.state.engineeringIndex;

  const nav = useNavigate();


  const selectedLab = all_departments[engineeringIndex].years
    .find((yearObj) => yearObj.yearName === year)
    .semesters.find((semesterObj) => semesterObj.semesterName === semester)
    .labs.find((labObj) => labObj.labName === lab);

    return (
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '65vh', marginTop: '-2vh', }}>
        <div style={{ width: '48%', paddingLeft: '1vw',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',backgroundColor: 'rgba(244, 244, 244, 0.8)',marginRight:'1vw',borderRadius:'10px' }}>
        <h1 style={{ textAlign: 'left',marginLeft:'1vw' }}>OUTCOMES OF THIS LAB:</h1>
          <p style={{ textAlign: 'left', fontSize: 'x-large', paddingLeft: '1vw' }}>After completion of the course, the students should be able to:</p>
          <ul>
            {selectedLab.labOutcomes.map((outcome, index) => (
              <li key={index} style={{ fontSize: 'x-large' }}>Outcome {outcome}</li>
            ))}
          </ul>
        </div>
        <div style={{ width: '51%', paddingLeft: '1vw',backgroundColor:'#F4F4F4',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',borderRadius:'10px' }}>
          <h1 style={{ textAlign: 'left',color:"#59C1BD",marginLeft:'1vw'}}>EXPERIMENTS IN THIS LAB:</h1>
  
          <div style={{ height: '75%', width: '95%', overflowY: 'scroll', marginLeft: '0vw',paddingLeft:'1vw' }}>
            {selectedLab.labExperiments.map((experimentObj, index) => (
              <div style={{ height: '50%', width: '100%' }}>
                <table style={{ height: '100%', width: '100%' }}>
                  <tbody> {/* Add this tbody element */}
                    <tr style={{marginTop:'19vh'}}>
                      <td style={{ width: '80%', height: '100%'}}>
                        <table >
                          <tr>
                            <td><p key={index} style={{ fontSize: 'x-large',marginLeft:'3.5vw', listStyle: 'none', fontWeight: '700',marginTop:'3vh',transform:'scale(1.25)' }}>Experiment {experimentObj.experimentNumber}: </p></td>
                          </tr>
                          <tr>
                            <td style={{ fontSize: 'x-large', marginTop: '-5vh' }}>{experimentObj.experimentAim}</td>
                          </tr>
                        </table>
                      </td>
                      <td style={{ width: '20%', height: '100%' }}>
                      <button
  style={{ width: '63%', height: '5vh',transform:'scale(1.25)', fontSize: 'large', marginTop: '4vh',border:'solid 1px black',backgroundColor:'transparent',fontWeight:'700',cursor:'pointer' }}
  onClick={() => {
    const inputString = all_departments[engineeringIndex].name;
    const convertedString = inputString.toLowerCase().replace(/\s+/g, '-');
    
    
    nav(`/virtual-lab/${convertedString}/${engineeringIndex}/year/${year}/semester/${semester}/labs/${selectedLab.labName}/experiment-number/${experimentObj.experimentNumber}`);
  }}
>
  View <IoOpenOutline style={{ transform: 'scale(1.5)', marginLeft: '0.5vw' }} />
</button>
                      </td>
                    </tr>
                  </tbody> {/* Close the tbody element */}
                </table>
                <hr style={{ width: '95%', marginLeft: '0vw'}}></hr>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}


  

function LabSelectionandDetailsPage() {

  const location = useLocation();
  const lab = location.state.labName;
  const engineeringIndex = location.state.engineeringIndex;
 

    return(
    
      <div style={{width:'95%',display:'flex',flexDirection:'column',height:'100%'}}>
      <div><h1 style={{fontSize:'xx-large',fontWeight:'700',textAlign:'right',marginRight:'3vw',marginTop:'-1vh'}}>{lab}</h1></div>
      <Outlet/>
      
      
    </div>
  )
    
}

export default LabSelectionandDetailsPage;

