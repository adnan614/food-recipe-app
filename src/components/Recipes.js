import React from "react";

const Recipes = ({ recipes, search }) => {
  return (
    <>
      <div className="row">
        {recipes
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.strMeal.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((value, index) => {
            return (
              <div className="col-md-3" key={index}>
                <div className="card py-2 text-center">
                  <img
                    src={value.strMealThumb}
                    className="img-fluid w-50 mx-auto rounded-circle"
                  />
                  <div className="card-body">
                    <h4>{value.strMeal}</h4>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Recipes;
