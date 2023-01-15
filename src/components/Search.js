import React from "react";
// import debounce from "lodash.debounce";

function Search(props) {
  const { search, term, setTerm } = props;

  function handleChange(changeEvent) {
    // props.search(props.term);
    changeEvent.preventDefault();
    setTerm(changeEvent.target.value);
  }

  async function onSubmit(event) {
    event.preventDefault();
    await search(term);
  }

  // const updateQuery = e => setTerm(e?.target?.value);
  // const debouncedOnChange = debounce(updateQuery,200)

  return (
    <form className="Search" id="searchAPI" >
      <p className="search-render">
        <em>{term && "Keywords Typed: " + term}</em>
      </p>
      <input
        className="test-input"
        type="text"
        value={props.term}
        onChange={handleChange}
        id="term"
        name="term"
        autoFocus="autoFocus"
        placeholder="Search music, films, tv shows..."
      />
      <input className="Button-submit" type="submit" onClick={onSubmit} />
     </form> 
  
  );
}
export default Search;
