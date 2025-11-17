import React,{Suspense,lazy,useState} from "react";
var Profile=lazy(()=>import("./Profile.jsx"))
import './App.css';


function App(){
  var[show,setShow]=useState(false)
  return(
    <div>
      <h1>Lazy Loading</h1>
      <button onClick={()=>{setShow(true)}}>Show Profile</button>
      <Suspense fallback={<h1>Loading ...</h1>}>
      {
        show && <Profile/>
      }

      </Suspense>
    </div>
  )
}
export default App;

