import React from "react";

const withApiServices = Wraped => {
  return props => {
    const { value } = props;

    if (!value.albums) {
      return <div>Ожидание</div>;
    } else return <Wraped value={value} />;
  };
};

export default withApiServices;
