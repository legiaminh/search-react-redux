const InputSearch = (props) => {
  const onChange = (e) => {
    console.log(e.target.value);
    props.onChange(e.target.value);
  };
  return (
    <div>
      Search on employee name : &nbsp;
      <input type="text" id="searchTxt" onChange={onChange} />
    </div>
  );
};

export default InputSearch;
