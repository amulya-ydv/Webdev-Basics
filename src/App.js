import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode]= useState('light'); //wheter dark mode is enabled or not

  const toggleMode = () => {
    if( mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#02063d';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils2" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode= {mode} toggleMode = {toggleMode} />
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode= {mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
