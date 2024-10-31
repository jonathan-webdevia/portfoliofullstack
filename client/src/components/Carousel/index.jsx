import { useState } from "react";
import { Carousel } from "react-bootstrap";
import lesptitsplats from "../../assets/media/img/lespetitsplats.png";
import hrnet from "../../assets/media/img/hrnet.png";

import "./index.css";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="carouselContainer">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={lesptitsplats}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Les petits plats</h5>
            <p>Algorhitmie de recherche & intégration.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hrnet} alt="First slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="car-title">Mes derniers projets : </div>
    </section>
  );
};

export default ControlledCarousel;
