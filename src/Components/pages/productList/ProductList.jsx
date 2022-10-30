import React from "react";
import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../../dummyData";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = React.useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "Stock", headerName: "Stock", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "price",
      headerName: "Price",

      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      {" "}
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default ProductList;
