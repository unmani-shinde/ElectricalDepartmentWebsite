import './App.css';
import ElectDeptLandingPage from './javascripts/landing-page';
import VirtualLabLandingPage from './javascripts/virtual-lab';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { AllLabs, ExperimentDetails, DetailsPageOne,DetailsPageTwo,DetailsPageThree } from './javascripts/labs';


import LabSelectionandDetailsPage from './javascripts/labs';

function Something(){
  return(<h1>Hi! </h1>)
}



function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<ElectDeptLandingPage/>}></Route>
      
      <Route 
  path='/virtual-lab/:departmentName' 
  element={<VirtualLabLandingPage />}
  
>
 
  <Route path='' element={<Something />} />

  <Route path='labs' element={<LabSelectionandDetailsPage />}>
    <Route path='' element={<AllLabs />} />
  </Route>
</Route>
<Route path='virtual-lab/:convertedString/:engineeringIndex/year/:year/semester/:semester/labs/:labName/experiment-number/:expNumber' element={<ExperimentDetails/>}>
    <Route path='' element={<DetailsPageOne/>}/>
    <Route path='diagram' element={<DetailsPageTwo/>}/>
    <Route path='observations' element={<DetailsPageThree/>}/>

</Route>


      </Routes>
      
    </Router>
  );
}

export default App;
