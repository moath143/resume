import React from "react";

const Card = (props) => {
  return (
    <div className="co-md-6 col-lg-4">
      <div className="box">
        <div className="image">
          <img
            src={
              props.img
                ? props.img
                : "https://www.google.ps/url?sa=i&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fonline-coding-classes-for-beginners-2022-guide%2F&psig=AOvVaw1HlXYOEjjIzygyHCltMoya&ust=1653217277166000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJDvrre48PcCFQAAAAAdAAAAABAD"
            }
            alt=""
          />
          {props.tagArr.map((tag, index) => {
            return (
              <a href="" key={index} className="cate">
                {tag}
              </a>
            );
          })}
        </div>
        <div className="text">
          <h3>
            <a href={props.url} target="_blank">
              {props.title}
            </a>
          </h3>
          <h4>
            By {props.name}, {props.date}
          </h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
