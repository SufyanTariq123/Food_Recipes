import React, { component } from "react";
import { Card, Grid, GridList } from "@material-ui/core";

const Recipe = (props) => {
  const { recipes } = props;
  return (
    <React.Fragment>
      <div class="card-columns">
        {recipes.map((recipe) => (
          <div class="card py-2 text-center">
            <img
              src={recipe.recipe.image}
              className="img-fluid w-50 mx-auto rounded-circle"
            />
            <div class="card-body">
              <h4>{recipe.recipe.label}</h4>
            </div>
            <ul class="list-group list-group-flush">
              {recipe.recipe.ingredientLines.map((ingredient) => (
                <li class="list-group-item">{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
export default Recipe;
