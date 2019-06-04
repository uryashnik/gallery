import React from "react";
import withApiServices from "../hoc/with-api-services";
import "./albums.css";

const Albums = ({value}) => {

  const { albums } = value;
  console.log(albums);

  const albumsList = albums.map((item) => {
    return <div className='albumList__item' key={item}>
                <div className='albumList__name'>Album №{item}</div>
            </div>;
  });

  return <div className="albumList">{albumsList}</div>;

  //   console.log(props.value);

  // return <div className="color">Albums</div>;
};

export default withApiServices(Albums);