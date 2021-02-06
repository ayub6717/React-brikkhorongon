// import React, { useState } from "react";
// import {ImageResponsive} from 'react-image-responsive';
import { Carousel } from 'react-bootstrap'
import classes from './../HeaderComponent/header.module.css'


function ControlledCarousel() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  //     const sources = [
  //   { maxWidth: 100, src: 'http://placehold.it/100x100' },
  //   { maxWidth: 200, src: 'http://placehold.it/200x100' },
  //   { maxWidth: 400, src: 'http://placehold.it/400x100' },
  //   { maxWidth: 800, src: 'http://placehold.it/800x100' },
  //   { maxWidth: 1200, src: 'http://placehold.it/1200x100' }
  // ];

  return (
    <Carousel >
      <Carousel.Item interval={5000}>
        <img
          className={classes.slid_Img} 
          src="/img/brikkho-2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className={classes.slid_Img} 
          src="/img/brikkho-3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <img
            className={classes.slid_Img} 
            src="/img/brikkho-1.jpg"
            alt="Third slide"
          />
        {/* <ImageResponsive
          path={"/img/brikkho-1.jpg"}
        alt="this is my image"
        width="100px"
        height="100px"

        /> */}
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel
