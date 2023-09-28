import logo from './logo.svg';
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
      <Route path='/:yearName/:semesterName' element={<LabSelectionandDetailsPage/>} />
      <Route path='/virtual-lab/:departmentName' element={<VirtualLabLandingPage />}>
      <Route path='' element={<Something/>} />
      
      </Route>

      </Routes>
      
    </Router>
  );
}

export default App;
