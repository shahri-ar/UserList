import React, { useState } from "react";

const SearchBar = ({ onSearch, user }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (!query) return; // Handle empty input
    setLoading(true);
    setError(null); // Reset any previous error

    const filteredUsers = user.filter((u) =>
      u.firstName.toLowerCase().includes(query.toLowerCase()) ||
      u.gender.toLowerCase().includes(query.toLowerCase())
    );
    onSearch(filteredUsers); // Pass filtered results to the parent component

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  // const handleInputChange = e => {  /**only when seacrh on button press needed **/
  //     setQuery(e.target.value)
  // }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value === "") {
      window.location.reload(); // Reloads the page if the input is cleared
    } else {
      handleSearch(value); // Trigger search on input change
    }
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search users"
        aria-label="Search"
        value={query}
        onChange={handleInputChange}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default SearchBar;
