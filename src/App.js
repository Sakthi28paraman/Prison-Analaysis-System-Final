import './App.css';
import Header from './components/Header';
import Crud from './components/crud';
import Break from './components/break';
//import Prisonerform from './create/prisoner';

function App() {
  return (
    <div className= "App" >  
      <br />
            <Header />
      <div className='subapp'>
            <Break />
            <Crud />
            
      </div>
            
    </div>
  );
}

export default App;
