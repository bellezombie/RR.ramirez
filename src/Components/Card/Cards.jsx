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