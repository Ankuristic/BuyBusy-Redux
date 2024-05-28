// import { Link } from "react-router-dom";
import React from 'react'
// import Navbar from '../components/Navbar'
import './home.css'

import image1 from "../Images/Electronics/image 1.jpg"
import image2 from "../Images/Electronics/imge 2.jpg"
import image3 from "../Images/Electronics/image 3.jpg"
import image4 from "../Images/Electronics/image 4.jpg"
import image5 from "../Images/jewelly/image 1.jpg"
import image6 from "../Images/jewelly/image 2.jpg"
import image7 from "../Images/jewelly/imaage 3.jpg"
import image8 from "../Images/women/image 2.jpg"
import image9 from "../Images/jewelly/image 4.jpg"
import image11 from "../Images/men/image 1.jpg"





const menu = [
  { id: '1', images: image1 , description: "loreum" },
  { id: '2', images: image2, description: "loreum" },
  { id: '3', images: image3, description: "loreum" },
  { id: '4', images: image4, description: "loreum" },
  { id: '5', images: image5, description: "loreum" },
  { id: '6', images: image6, description: "loreum" },
  { id: '7', images: image7, description: "loreum" },
  { id: '8', images: image8, description: "loreum" },
  { id: '9', images: image9, description: "loreum" },
  { id: '11', images: image11, description: "loreum" },

];


 export const Home = () => {
  return (
    <div className="home">
    <div className='search-form'>
    <input type ="text"  placeholder="search by Name"/>
     </div>
     <div className='filter'>
      <h1> Filter </h1>
      <h2> Category </h2>
<input type="checkbox" id="clothing" />
  <label for="vehicle1"> Men's clothing</label>
  <input type="checkbox" id="" />
  <label for="vehicle2"> women's clothing</label>
  <input type="checkbox" />
  <label for="vehicle3"> clothing</label>
  <input type="checkbox" />
  <label for="vehicle3"> eletronis</label>


     </div>
     {/* <div className="menu-items">
                {menu.map(item => (
                    <div key={item.id} className="menu-item">
                        <img src={item.images} alt={item.description} />
                        <p>{item.description}</p>
                    </div>
                ))}
            </div> */}


            <div className="menu-items">
    {menu.map((item,index) => (
        <div key={index} className="menu-item">
            <img src={item.images} alt={item.description} />
            {/* <p>{in}</p> */}
        </div>
    ))}
</div>


    </div>
  );
};
