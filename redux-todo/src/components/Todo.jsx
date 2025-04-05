import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Todo() {
  return (
    <>
      <div className="todo-data col-lg-5 mx-atuo mt-2 ">
        <div
          className="todo-content d-flex justify-content-between align-items-center px-2"
          style={{
            background: "#dcdde1",
            borderRadius: "5px",
            height: "45px",
            padding: "0px 10px",
          }}
        >
          <li
            style={{ listStyle: "none" }}
          >
            User
          </li>
          <div className="edit-dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
            <EditIcon style={{ color: "#3c40c6", cursor: "pointer" }} />
            <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
            <VisibilityIcon style={{ color: "#1dd1a1", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
