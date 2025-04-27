import React from "react";


function Tablehead({ columns, onHandleclick, sortColumn, sortOrder, items }) {

  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            scope="col"
            style={{ cursor: "pointer" }}
            onClick={()=>{
              onHandleclick(
                column.name,
                sortColumn === column.name
                  ? sortOrder === "ase"
                    ? "desc"
                    : "ase"
                  : "desc"
              )
            }

            }
          >
            {column.name}
            {sortColumn === column.name && sortOrder === "ase" && (
              <span class="bi bi-arrow-up"></span>
            )}
            {sortColumn === column.name && sortOrder === "desc" && (
              <span class="bi bi-arrow-down"></span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default Tablehead;
