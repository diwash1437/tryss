import { Routes, Route } from 'react-router-dom';
import Restaurant from "./homePage/Restaurant";
import NabataColtd153 from './order/NabataColtd153';
import { TsCorporation } from './order/TsCorporation';
import { FujimatsuColtd } from './order/FujimatsuColtd';
import './App.css'


function App() {


  return (
 <Routes>
  <Route path="/" element={<Restaurant/>}/>
  <Route path="/nabata" element={<NabataColtd153/>}/>
  <Route path='/tsCorporation' element={<TsCorporation/>}/>
  <Route path='/fujimatsu' element={<FujimatsuColtd/>}/>
  {/* <Route path='/try' element={<Trycheckitem/>}/> */}

 </Routes>
  )
}

export default App
