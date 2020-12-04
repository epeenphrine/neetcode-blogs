import React from "react";
export default function PythonDirectory() {
  const dirArray = [
    {
      title: "Flask",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png",
      description: "flask templates, codes I use often",
      dir: "python/flask",
    },

  ];
  const dirCards = dirArray.map((card) => {
    return (
      <div className="card mx-3" style={{ width: "18rem" }}>
        <a href={`/${card.dir}`}>
          <img
            className="card-img-top"
            src={card.image}
            alt="Card image cap"
            style={{ height: "10rem" }}
            href={`/${card.dir}`}
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.description}</p>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="row">{dirCards}</div>
    </React.Fragment>
  );
}
