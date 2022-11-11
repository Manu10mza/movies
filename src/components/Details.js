import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
//falta armar la action getDetails
//faltan los estilos
//TERMINAR

//https://www.omdbapi.com/?i=tt0371746&apikey=4a3b711b&full

export default function Details(props) {
  const dispatch = useDispatch();
  const myRecipe = useSelector((state) => state.details);
  console.log(myRecipe[0]);
  let { id } = useParams();
  //valido react v5 props.match.params.id

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch]);
  return (
    <div>
      <div>
        {myRecipe.length > 0 ? (
          <div>
            <h1>{myRecipe[0].title}</h1>
            <img src={myRecipe[0].image} atl="" />
            <h5>
              Diets:{" "}
              {!myRecipe[0].createdInDb
                ? myRecipe[0].diets.map((e) =>
                    myRecipe[0].diets.indexOf(e) < myRecipe[0].diets.length - 1
                      ? e + ", "
                      : e
                  )
                : myRecipe[0].diets.map((e) =>
                    myRecipe[0].diets.indexOf(e)
                      ? e.title + ", "
                      : e.title + " "
                  )}
            </h5>
            <br />
            <div>
              <h3>Score: {myRecipe[0].score}</h3>
              <h3>Health: {myRecipe[0].health}</h3>
              <p>Summary: {myRecipe[0].summary}</p>
              <p> Steps: {myRecipe[0].steps}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <Link to="/home">
          <button className={styles.btn}>Go back</button>
        </Link>
      </div>
    </div>
  );
}
