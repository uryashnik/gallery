import React from "react";
import withApiServices from "../hoc/with-api-services";
import "./albums.css";

const Albums = props => {
    
  const { albums } = props.value;
  console.log(albums);

  const albumsList = albums.map(item => {
    return <div key={item}>{item}</div>;
  });

  return <div className="color">{albumsList}</div>;

  //   console.log(props.value);

  // return <div className="color">Albums</div>;
};

export default withApiServices(Albums);