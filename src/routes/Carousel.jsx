import React, { useState, useEffect } from "react";
import "./css/Carousel.css";
import Data from "./Data";
const Carousel = () => {
  const [people] = useState(Data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="flex flex-col m-10">
      <div className="p-5">
        <h1 className="text-5xl text-slate-100">User Testimonials</h1>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <h4 className="text-sky-400 text-2xl">{name}</h4>
              <p className="">{title}</p>
              <p className="text-slate-200 text-justify text-xl p-7">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};
export default Carousel;
