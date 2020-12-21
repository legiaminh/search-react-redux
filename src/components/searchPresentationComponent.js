import React from "react";

const SearchPresentationComponent = (props) => {
  const list = props.data.map((item, index) => (
    <li key={index}>{item.preferredFullName}</li>
  ));
  return (
    <div>
      {props.data.length > 0 ? <ul>{list}</ul> : <h2>Empty Employee List</h2>}
    </div>
  );
};
export default SearchPresentationComponent;
