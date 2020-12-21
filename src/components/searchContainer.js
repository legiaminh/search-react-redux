import { useSelector } from "react-redux";
import SearchPresentationComponent from "./searchPresentationComponent";

const SearchContainer = (props) => {
  const empList = useSelector((state) => state.empReducer.empList);
  return <SearchPresentationComponent data={empList} />;
};

export default SearchContainer;
