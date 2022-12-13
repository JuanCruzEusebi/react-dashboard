import React from "react";

const Card = (props) => {


  let colours = {
    blue: 'border-left-primary',
    green: 'border-left-success',
    yellow: 'border-left-warning'
  }
  let accents = {
    blue: 'text-primary',
    green: 'text-success',
    yellow: 'text-warning'
  }
  
  let borderColor;
  let accentText;
  if (props.colour === 'blue') {
    borderColor = colours.blue;
    accentText = accents.blue;
  } else if (props.colour === 'green') {
    borderColor = colours.green;
    accentText = accents.green;
  } else if (props.colour === 'yellow') {
    borderColor = colours.yellow;
    accentText = accents.yellow;
  }



  return (
    <>    
      <div className="col-md-4 mb-4">
        <div className={`card ${borderColor} shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className={`text-xs font-weight-bold ${accentText} text-uppercase mb-1`}>{props.title}</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.number}</div>
              </div>
              <div className="col-auto">
                <i className={`${props.icon} fa-2x text-gray-300`}></i>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Card;