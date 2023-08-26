import React from 'react'
import TourList from "./TourList"
import Axios from "axios"
//3 components: TourList, Tour, and App

//fetching data will happen here
const url="https://course-api.com/react-tours-project"


function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [tours, setTours] = React.useState(null);
  


  async function fetchData(){
    try{
      let response = await Axios.get(url);
      setTours(response.data);

    } catch(err){
      console.log(err);
    }

    setIsLoading(false);
  }



  React.useEffect( ()=>{
    //fetching data after Loading was rendered
    fetchData();
  }, [])





  return (
    <main>
      
      {isLoading?<div className="loading"></div>:<TourList tours={tours}/>}
    </main>
  )
}

export default App
