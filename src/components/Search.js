import React from "react";

export default function Search(props) {
  const { search, keyword, setKeyword } = props;

  function handleChange(changeEvent) {
    console.log("Someone Typed event =>", changeEvent);
    setKeyword(changeEvent.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    search(keyword);
  }
  return (
    <form id="searchAPI">
      <p style={{ color: "red" }}>
        <em>{keyword && "Keywords Typed: " + keyword}</em>
      </p>
      <input
        type="text"
        value={props.keyword}
        onChange={handleChange}
        id="term"
      />
      <input type="submit" onClick={onSubmit} />
    </form>
  );
}
