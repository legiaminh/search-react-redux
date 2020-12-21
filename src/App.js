import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import SearchContainer from "./components/searchContainer";
import InputSearchContainer from "./components/inputSearchContainer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("First Load");
    async function firstLoad() {
      const rs = await fetch("http://localhost:5000/employees");
      const result = await rs.json();
      dispatch({ type: "UPDATE_EMP_LIST", payload: result });
    }
    firstLoad();
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Demo Search React-Redux</h1>
      <InputSearchContainer />
      <SearchContainer />
    </div>
  );
}

export default App;
