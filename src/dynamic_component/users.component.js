import React, { useEffect, useMemo, useState } from "react";
import Table from "../table_component/table.component";
import axios from "axios";

function Users({ alluser, setColumn }) {
  const [users, setUsers] = useState([]);
  const [error,setError] = useState()

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://dummyjson.com/users`);
        alluser(data.users);
        setUsers(data.users);
      } catch (err) {
        setError("Data not found ")
      }
    })();
  }, [alluser]);

  const columns = useMemo(
    () => [
      { name: "Id", path: "id" },
      { name: "First Name", path: "firstName" },
      { name: "Last Name", path: "lastName" },
      { name: "Email", path: "email" },
      { name: "Age", path: "age" },
      { name: "Hair-Color", path: "hair.color" },
      { name: "Hair-Type", path: "hair.type" },
      { name: "Company-City", path: "company.address.city" },
    ],
    []
  );

  useEffect(() => {
    setColumn(columns);
  }, [columns, setColumn]);

  // const paths = [
  //   "id",
  //   "firstName",
  //   "lastName",
  //   "email",
  //   "age",
  //   "hair.color",
  //   "hair.type",
  // ];

  return (
    <div>
      <Table items={users} columns={columns} />
      {error ?? <span>{error}</span>}
    </div>
  );
}

export default Users;
