import React from "react";



function Search(props) {
  const { search, term, setTerm } = props;

  function handleChange(changeEvent) {
    props.search(props.term);
    setTerm(changeEvent.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    search(term);
  }

  function debounce (func,timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer =setTimeout(()=> {func.apply(this, args);}, timeout)
    };
  }

  function saveInput () {
    console.log('saving data');
  }

  const processChange = debounce(() => saveInput());

  return (
    <form className="Search" id="searchAPI">
      <p style={{ color: "white" }}>
        <em>{term && "Keywords Typed: " + term}</em>
      </p>
      <input
        className="test-input"
        type="text"
        value={props.term}
        onChange={handleChange}
        id="term"
        onKeyUp={processChange}
        placeholder='Search music, films, tv shows...'
      />
      <input className="Button-submit" type="submit" onClick={onSubmit} />
    </form>
  );
}
export default Search;
