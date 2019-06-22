import React from "react";
import Place from "./Place.jsx";

const List = ({ list }) => {
  // console.log("list passed down!!!!!", list);
  return (
    <div>
      <h2> YOUR LIST </h2>
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
