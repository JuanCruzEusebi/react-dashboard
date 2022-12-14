import React , { useState, useEffect } from "react";
import Card from "./Card";
import BigCard from "./BigCard";
import bestSeller from "../assets/images/best-seller.png";
import Button from "./Button";
import Tile from "./Tile";
import axios from "axios";


const ContentRowTop = () => {

  const [userCount, setUserCount] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:3000/api/users/')
      .then(res => {
      setUserCount(res.data.count)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const [productsCount, setProductCount] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:3000/api/products/')
      .then(res => {
        setProductCount(res.data.count)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  // const [productsInSale, setProductsInSale] = useState(null);


  // let arrayProd = []

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/products/')
  //     .then(res => {        
  //       let prodData = res.data.data.products
  //       prodData.map(ans => console.log(ans.in_sale))
  //     })
      
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, [])  




  let genres = [
    'Bramare Malbec', 'Old Vine Malbec 2018', 'Malbec 2018', 'Appellation Lunlunta',
    'Chardonnay 2021', 'Karia Chardonnay'
  ];
  
  return (
    <div className="container-fluid" >
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>
    
      {/* Content Row Movies */}
      <div className="row" >
  
        {/* Movies in database */}
        <Card colour='blue' title='Users in data base' number={userCount} icon='fas fa-film' />
  
        {/* Total awards */}
        <Card colour='green' title='Total Products' number={productsCount} icon='fas fa-award' />
  

      </div>
      {/* End movies in database */}
  
  
      {/* Content Row last movie in database */}
      <div className="row">
        {/* Last movie in database */}
        <div className="col-lg-6 mb-4">
          <BigCard title='Best seller to date'>
            
            <div className="card-body" >
              <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '7rem'}}
                     src={bestSeller} alt=" Star Wars - Mandalorian "></img>
              </div>
              <p>
              </p>
    
              <Button content='View detail' />
            </div>
          </BigCard>
        </div>
        {/* End Content Row last movie in database */}
  
        {/* Genres in database */}
        <div className="col-lg-6 mb-4" >
          <BigCard title='Products on sale currently'>
            
            <div className="card-body" >
              
              <div className="row" >
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