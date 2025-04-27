import React from "react";

function Tablebody({ items, columns }) {
  return (
    <tbody>
      {items.map((item, index) => (
        <tr key={index}>
          {columns.map((column, index) => {
            if (column.path) {
              const keys = column.path.split(".");
              let value = item;
              keys.forEach((key) => {
                value = value ? value[key] : "N/A";
              });
              return <td key={index}>{value}</td>;
            }
            return <td key={index}>kuje passi na</td>;
          })}
        </tr>
      ))}
    </tbody>
  );
}

export default Tablebody;

// {users.map((user, index) => (
//   <tr key={index}>
//     {paths.map((path, id) => (
//       <td key={id}>{user[path]}</td>
//     ))}
//   </tr>
// ))}
