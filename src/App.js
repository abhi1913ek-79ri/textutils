import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';




function App() {
  // variables
  let tittle="TextUtils";

  // hooks
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);



  // toggle mode
  const handleToggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#01225b';
      showAlert('Dark mode Enabled!','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode Enabled!','success')

    }
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  //alert
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
  }




  return (
    <>
    <Navbar title={tittle} mode={mode} toggleMode={handleToggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <TextForm mode={mode}/>
    </div>
    {/* <div className="container">
      <About/>
    </div> */}
    </>
  );
}

export default App;
