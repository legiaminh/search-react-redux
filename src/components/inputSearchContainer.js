import InputSearch from "./inputSearch";
import React from "react";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react-hooks/rules-of-hooks

const InputSearchContainer = () => {
  const dispatch = useDispatch();
  async function onChange(searchText) {
    // call REST Api
    const rs = await fetch("http://localhost:5000/employees");
    const result = await rs.json();

    if (searchText.length === 0) {
      dispatch({ type: "UPDATE_EMP_LIST", payload: result });
    } else {
      const filterResult = result.filter((item) =>
        item.preferredFullName.includes(searchText)
      );
      dispatch({ type: "UPDATE_EMP_LIST", payload: filterResult });
    }
  }
  return <InputSearch onChange={onChange} />;
};

export default InputSearchContainer;
