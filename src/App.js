import './App.css';
import ElectDeptLandingPage from './javascripts/landing-page';
import VirtualLabLandingPage from './javascripts/virtual-lab';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LabSelectionandDetailsPage from './javascripts/labs';

function Something(){
  return(<h1>Hi!</h1>)
}


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<ElectDeptLandingPage/>}></Route>
      
      <Route 
  path='/virtual-lab/:departmentName' 
  element={<VirtualLabLandingPage />}
  defaultState={{ engineeringIndex: -1 }}
>
  {/* This route will match '/virtual-lab/:departmentName' */}
  <Route path='' element={<Something />} />

  {/* This route will match '/virtual-lab/:departmentName/labs' */}
  <Route path='labs' element={<LabSelectionandDetailsPage />} />
</Route>


      </Routes>
      
    </Router>
  );
}

export default App;
