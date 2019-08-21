import React from "react";
import Place from "./Place.jsx";

const List = ({ list }) => {
  return (
    <div>
      <h2> Your list </h2>
      {list
        ? list.map((places, key) => (
            <Place
              name={places.name}
              location={places.location}
              img={places.img}
              price={places.price}
              key={key}
            />
          ))
        : "(none)"}
    </div>
  );
};

export default List;
