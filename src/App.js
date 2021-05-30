import Home from './components/Home';
import './App.css';
import Model from './components/Model';
import SlideBar from './components/SlideBar';
import {AppContext} from './contexts/index';
import react,{useContext,useState} from 'react';
function App() {
  const [isShowSlide,setShowSlide]=useState(false); 
  const [isShowModel,setShowModel]=useState(false); 
  const CloseShowSlide=()=>{
      setShowSlide(false);
  }
  const OpenShowSlide=()=>{
      setShowSlide(true);
  }
  const CloseShowModel=()=>{
      setShowModel(false);
  }
  const OpenShowModel=()=>{
      setShowModel(true);
  }
  return (
    <AppContext.Provider 
      value={
        {
          isShowSlide,
          isShowModel,
          CloseShowSlide,
          OpenShowSlide,
          CloseShowModel,
          OpenShowModel
        }
      }
    >
      <div className="App">
        <Home />
        <SlideBar/>
        {isShowModel && <Model/>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
