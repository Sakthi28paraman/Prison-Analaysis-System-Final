import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Create from './components/create'
import Update from './components/update'
import Read from './components/read'
import CreatePrison from './create/prison'
import CreateVisitor from './create/visitor'
import CreateGuard from './create/guard'
import CreatePrisoner from './create/prisoner'
import CreatePunishment from './create/punishment'
import CreateParole from './create/parole'
import UpdatePrison from './update/update1/prison'
import UpdatePrisoner from './update/update1/prisoner'
import UpdateVisitor from './update/update1/visitor'
import UpdateGuard from './update/update1/guard'
import UpdatePunishment from './update/update1/punishment'
import UpdateParole from './update/update1/parole'
import ReadPrison from './Read/prison'
import ReadPrisoner from './Read/prisoner'
import ReadGuard from './Read/guard'
import ReadVisitor from './Read/visitor'
import ReadPunishment from './Read/punishment'
import ReadParole from './Read/parole'
import DeletePrison from './Delete/prison'
import DeletePrisoner from './Delete/prisoner'
import DeleteGuard from './Delete//guard'
import DeleteVisitor from './Delete/visitor'
import DeletePunishment from './Delete/punishment'
import DeleteParole from './Delete/parole'
import Aggregatepage from './components/Aggregation/aggregation'
import Aggregate1 from './components/Aggregation/ag1'
import Aggregate2 from './components/Aggregation/aggregation'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
        <Route path="/create" element={<Create />}/>
        <Route path ="/update" element={<Update />} />
        <Route path ="/read" element={<Read />} />
        <Route path="/CreatePrison" element={<CreatePrison />}/>
        <Route path="/CreatePrisoner" element={<CreatePrisoner />}/>
        <Route path="/CreateGuard" element={<CreateGuard />}/>
        <Route path="/CreateVisitor" element={<CreateVisitor />}/>
        <Route path="/CreatePunishment" element={<CreatePunishment />}/>
        <Route path="/CreateParole" element = {<CreateParole />}/>
        <Route path="/UpdatePrison" element = {<UpdatePrison />}/>
        <Route path="/UpdatePrisoner" element = {<UpdatePrisoner />}/>
        <Route path="/UpdateVisitor" element = {<UpdateVisitor />}/>
        <Route path="/UpdateGuard" element = {<UpdateGuard />}/>
        <Route path="/UpdatePunishment" element = {<UpdatePunishment />}/>
        <Route path="/UpdateParole" element = {<UpdateParole />}/>
        <Route path="/ReadPrison" element = {<ReadPrison />}/>
        <Route path="/ReadPrisoner" element = {<ReadPrisoner />}/>
        <Route path="/ReadVisitor" element = {<ReadVisitor />}/>
        <Route path="/ReadGuard" element = {<ReadGuard />}/>
        <Route path="/ReadPunishment" element = {<ReadPunishment />}/>
        <Route path="/ReadParole" element = {<ReadParole />}/>
        <Route path ="/Aggregatepage" element = {<Aggregatepage />} />
        <Route path = "/Aggregate1" element = {<Aggregate1/>} />
        <Route path="/DeletePrison" element = {<DeletePrison />}/>
        <Route path="/DeletePrisoner" element = {<DeletePrisoner />}/>
        <Route path="/DeleteVisitor" element = {<DeleteVisitor />}/>
        <Route path="/DeleteGuard" element = {<DeleteGuard />}/>
        <Route path="/DeletePunishment" element = {<DeletePunishment />}/>
        <Route path="/DeleteParole" element = {<DeleteParole />}/>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
