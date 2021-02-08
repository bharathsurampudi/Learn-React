import React,{useState,useEffect,useReducer} from "react";
import '../css/App.css';
//https://api.github.com/users/bharathsurampudi

function App({login}) {
  const [data,setData] = useState(null); 
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData);
  },[]);

  if(data){
    return(
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <p>{data}</p>
      </div>
    )
  }

  return (
    <div>
      No User Available
    </div>
  );
}

export default App;
