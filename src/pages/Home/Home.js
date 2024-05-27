// import { Link } from "react-router-dom";
import React from 'react'
// import Navbar from '../components/Navbar'
import './home.css'
import image1 from "../Images/Electronics/image1"


const menu = [
  { id: '1', images: image1, description: "loreum" },
  { id: '2', images: "./Images/Electronics/image2", description: "loreum" },
  { id: '3', images: "./Images/Electronics/image3", description: "loreum" },
  { id: '4', images: "./Images/Electronics/image4", description: "loreum" },
  { id: '5', images: "./Images/jewelly/image1", description: "loreum" },
  { id: '6', images: "./Images/jewelly/image2", description: "loreum" },
  { id: '7', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '8', images: "./Images/jewelly/image2", description: "loreum" },
  { id: '9', images: "./Images/jewelly/image4", description: "loreum" },
  { id: '10', images: "./Images/jewelly/image5", description: "loreum" },
  { id: '11', images: "./Images/men's clothing/", description: "loreum" },
  { id: '12', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '13', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '14', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '15', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '16', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '17', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '18', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '19', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '20', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '21', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '22', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '23', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '24', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '25', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '26', images: "./Images/Electronics/image1", description: "loreum" },
  { id: '27', images: "./Images/Electronics/image1", description: "loreum" },
];


 export const Home = () => {
  return (
    <div className="home">
    <div className='search-form'>
    <input type ="text"  placeholder="search by Name"/>
     </div>
     <div className="menu-items">
                {menu.map(item => (
                    <div key={item.id} className="menu-item">
                        <img src={item.images} alt={item.description} />
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>


    </div>
  );
};
