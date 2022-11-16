import React from "react";
import Card from "./Card";
import BigCard from "./BigCard";
import mandalorian from "../assets/images/mandalorian.jpg";
import Button from "./Button";
import Tile from "./Tile";

const ContentRowTop = () => {
  let genres = [
    'Accion', 'Animación', 'Aventura', 'Ciencia Ficción',
    'Comedia', 'Documental', 'Drama', 'Fantasía', 'Infantiles',
    'Musical',
  ];
  
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>
    
      {/* Content Row Movies */}
      <div className="row">
  
        {/* Movies in database */}
        <Card colour='blue' title='Movies in data base' number='21' icon='fas fa-film' />
  
        {/* Total awards */}
        <Card colour='green' title='Total Awards' number='79' icon='fas fa-award' />
  
        {/* Actors quantity */}
        <Card colour='yellow' title='Actors quantity' number='49' icon='fas fa-user' />
      </div>
      {/* End movies in database */}
  
  
      {/* Content Row last movie in database */}
      <div className="row">
        {/* Last movie in database */}
        <div className="col-lg-6 mb-4">
          <BigCard title='Last movie in Data Base'>
            
            <div className="card-body">
              <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '40rem'}}
                     src={mandalorian} alt=" Star Wars - Mandalorian "></img>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia
                inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis
                quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae
                dolorem culpa ratione aperiam voluptatum?
              </p>
    
              <Button content='View movie detail' />
            </div>
          </BigCard>
        </div>
        {/* End Content Row last movie in database */}
  
        {/* Genres in database */}
        <div className="col-lg-6 mb-4">
          <BigCard title='Genres in Data Base'>
            
            <div className="card-body">
              
              <div className="row">
                {genres.map(genre => <Tile text={genre} />)}
              </div>
            </div>
          </BigCard>
        </div>
      </div>
    </div>
  )
}

export default ContentRowTop;