import React, { useState } from "react";
import Tablehead from "./table-head.component";
import Tablebody from "./table-body.component";
import _ from "lodash";

function Table({ items, columns }) {
  const [sortColumn, setSortcolumn] = useState("");
  const [sortOrder, setSortorder] = useState("");

  function onHandleclick(column, order) {
    setSortcolumn(column);
    setSortorder(order);
  }
  function sortItems() {
    if (!sortColumn) return items;
    const column = columns.find((column) => column.name === sortColumn);
    return _.orderBy(items, column.path, sortOrder);
  }

  return (
    <div className="container">
      <table className="table">
        <Tablehead
          columns={columns}
          items={items}
          sortColumn={sortColumn}
          sortOrder={sortOrder}
          onHandleclick={onHandleclick}
        />
        <Tablebody items={sortItems()} columns={columns} />
      </table>
    </div>
  );
}

export default Table;
