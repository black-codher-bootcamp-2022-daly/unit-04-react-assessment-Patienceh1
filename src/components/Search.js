import React from "react";

 function Search(props) {
  const { search, term, setTerm } = props;

  function handleChange(changeEvent) {
    console.log("Someone Typed event =>", changeEvent);
    // changeEvent.preventDefault();
    // props.search(props.keyword);
    setTerm(changeEvent.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    search(term);
  }
  return (
    <form  className="Search" id="searchAPI" >
      <p style={{ color: "red" }}>
        <em>{term && "Keywords Typed: " + term}</em>
      </p>
      <input
      className="test-input"
        type="text"
        value={props.term}
        onChange={handleChange}
        id="term"
      />
      <input className="Button-submit" type="submit" onClick={onSubmit} />
    </form>
  );
}
export default Search;