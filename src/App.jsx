import React from "react";
import Hero from "./Components/hero_section/hero";
import Photo from "./modules/photo/photo";
import Photos from "./Components/photos/photos";
import Wish from "./Components/Wish_section/wish";
import Hearts from "./Components/herts/hearts";
import GiftModal from "./Components/present/GiftModal";
import Question from "./Components/quesion/question";
import Sign from "./Components/sign/sign";
import './index.css'
export default()=>{
  return(
    <>
      <Hero />
      <div className="fade"><Photos /></div>
      <div className="fade"><Wish /></div>
        <Hearts />
      <div className="fade"><Question /></div>
      <div className="fade"><GiftModal /></div>
        <Sign />
    </>
  )
}