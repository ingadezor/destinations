import React from "react"


function Tour(props) {
    //description tab is not extended by default
    let [isExtended, setIsExtended] = React.useState(false);



  return (
    <article className="single-tour" >
        <img className="img" src={props.image}/>
        
        <div className="tour-info">
            <span className="tour-price">${props.price}</span>
            <h5>{props.name}</h5>



            {/* {!isExtended ? (<div>
                <p>{props.info.slice(0,150) + "... "} 
                <button onClick={ () => {setIsExtended(!isExtended)}} className="info-btn"> More</button></p>
                </div>
            ) : (
                <div>
                <p>{props.info}</p>
                <button onClick={ () => {setIsExtended(!isExtended)}} className="info-btn"> Less</button></p>
                <div/>
            )

            } */}

            <p>{isExtended ? props.info : props.info.slice(0,150) + "... "} 
            <button onClick={ () => {setIsExtended(!isExtended)}} className="info-btn"> {isExtended? " Show less" : "Show more"}</button>
            </p>


            <button className="btn btn-block  delete-btn" onClick={ () => {props.removeTour(props.id)}}>Not interested</button>

        </div>




    </article>
  )
}

export default Tour