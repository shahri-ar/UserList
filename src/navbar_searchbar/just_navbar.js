import React, { useState } from "react";
import SearchBar from "./searchBar";
import Table from "../table_component/table.component";
import Users from "../dynamic_component/users.component";

const Navbar = () => {
  const [susers, setSusers] = useState([]);
  const [alluser, setAlluser] = useState([]);
  const [columns, setColumns] = useState([]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            
            <SearchBar user={alluser} onSearch={setSusers} />
          </div>
        </div>
      </nav>

      {susers?.length > 0 ? (
        <Table items={susers} columns={columns} />
      ) : (
        //{ when beside search also all users need to show}
        <Users setColumn={setColumns} alluser={setAlluser} />
      )}

      {/* {susers?.length > 0 && <Table items={susers} columns={columns} />} */}
    </>
  );
};

export default Navbar;
