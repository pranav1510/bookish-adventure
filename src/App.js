import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import EditComp from './Components/EditComp/EditComp';
import DataComp from './Components/DataComp/DataComp';
import CreateComp from './Components/CreateComp/CreateComp';

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home navigate={navigate}/>} />
        <Route path='/create' element={<CreateComp navigate={navigate}/>} />
        <Route path='/data' element={<DataComp navigate={navigate}/>} />
        <Route path='/edit' element={<EditComp navigate={navigate}/>} />
      </Routes>
    </div>

    
  );
}

export default App;
