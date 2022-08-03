/*
import React from "react";
import PropTypes from "prop-types";
import ItemCount from "../ItemCount/ItemCount";
import "./card.css";


function Card({ imageSource, title, text, url }) {

  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
      <div className='overflow'>
        <img src={imageSource} alt='a wallpaper' className='card-img-top' />
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
                        
        <p className='card-text text-secondary'>
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
      
       <ItemCount/>
      </div>
      
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;


/*
import React from 'react'
import Card from './Card'

import b from "./b.jpg"
import bs from './bs.jpg'
import at from './at.jpg'

const cards = [
  {
    id: 1,
    title: "Blur",
    image: b,
    url: "10",
  },
  {
    id: 2,
    title: "Black Sabbath",
    image: bs,
    url: "25",
  },
  {
    id: 3,
    title: "Aphex Twin",
    image: at,
    url: "30",
  },
];

const Cards = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;


/*import React from "react";
import PropTypes from "prop-types";
import ItemCount from "../ItemCount/ItemCount";
import "./card.css";


function Card({ imageSource, title, text, url }) {

  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
      <div className='overflow'>
        <img src={imageSource} alt='a wallpaper' className='card-img-top' />
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
                        
        <p className='card-text text-secondary'>
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
      
       <ItemCount/>
      </div>
      
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;*/
