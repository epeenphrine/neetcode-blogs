import React from "react";

export default function Home() {
  const dirList = ["Python", "Reactjs", "Docker", "Linux"];
  const dirArray = [
    {
      language: "Python",
      image: "https://d1y2qj23ol72q6.cloudfront.net/2019/06/python-blog-1.jpg",
      description: "python templates and libraries ",
    },
    {
      language: "Reactjs",
      image:
        "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
      description: "ReactJS templates and libraries ",
    },
    {
      language: "Docker",
      image:
        "https://pbs.twimg.com/profile_images/1273307847103635465/lfVWBmiW_400x400.png",
      description: "Docker templates and command ",
    },
    {
      language: "Linux",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png",
      description: "linux scripts and templates",
    },
  ];
  const dirCards = dirArray.map((card) => {
    return (
      <div className="card mx-3 mb-3" style={{ width: "18rem" }}>
        <a href={`/${card.language.toLowerCase()}`}>
          <img
            className="card-img-top"
            src={card.image}
            alt="Card image cap"
            style={{ height: "10rem" }}
            href={`/${card.language.toLowerCase()}`}
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{card.language}</h5>
          <p className="card-text">{card.description}</p>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="mx-auto text-center">
        <h1 className="display-4">NEETcode blogs</h1>
        <p className="lead">quickly find codes for projects</p>
      </div>
      <div className="container">
        <div className="row my-4">{dirCards}</div>
      </div>
    </React.Fragment>
  );
}
