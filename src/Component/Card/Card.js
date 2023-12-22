import React, { useEffect } from 'react'
import './card.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Card = (props) => {

  useEffect(()=>{
    Aos.init({duration:500});
  },[]);
  return (
    <div className='card_container' style={{backgroundColor:props.color}} data-aos="zoom-in">
      <h1>{props.title}</h1>
      <span>{props.subtitle}</span>
    </div>
  )
}
export default Card
