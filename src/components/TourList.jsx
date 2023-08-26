import React from "react"
import Tour from "./Tour"



//at this point frtched all the tours
function TourList(props) {
    const [tourList, setTourList] = React.useState(props.tours);

    //let tourList = props.tours;


    function removeTour(tourId){
        let newTourList = tourList.filter( (tour) => {
            return tour.id != tourId;
        })

        setTourList(newTourList);
    }




  return (<section>
    <div className="title">
        <h2>Our popular destinations</h2>
        <div className="title-underline"></div>
    </div>
    
    <div className="tours">
        
      { 
        tourList.map( (tour) =>{
            return <Tour id={tour.id} removeTour={removeTour} key={tour.id} image={tour.image} name={tour.name} info={tour.info} price={tour.price}/>
        })
      }
    </div>
    </section>
  )
}

export default TourList