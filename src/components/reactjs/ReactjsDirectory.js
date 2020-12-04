import React from "react";
export default function ReactjsDirectory() {
  const dirArray = [
    {
      title: "react-router-dom",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wisegeek.com%2Furl-address.jpg&f=1&nofb=1",
      description: "react directory routing",
      dir: "reactjs/react-router-dom",
    },
    {
      title: "Api request in react",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.akamai.com%2Fus%2Fen%2Fmultimedia%2Fimages%2Fvideo%2Fakamai-api-video-thumbnail.jpg%3Fimwidth%3D1366&f=1&nofb=1",
      description: "code snippet for making request",
      dir: "reactjs/api-request",
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
