import React from "react";
import "../App.css";

const Header = ({ search, inputChange }) => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-1">
          <i class="material-icons brand-icon">fastfood</i> Food Recipe
        </h1>
        <div class="input-group w-50 mx-auto">
          <input
            type="text"
            class="form-control"
            placeholder="search your recipes..."
            value={search}
            onChange={inputChange}
          />
          <div class="input-group-append">
            <button className="btn btn-dark" >
              search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
