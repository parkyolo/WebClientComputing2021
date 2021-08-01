import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, poster, rating, genres, runtime, summary}) {

  console.log(genres);
  return (
    <div className="movie">
      <img className="movie_poster" src={poster} alt={title} titlt={title}></img>
      <div className="inner">
        <h3>{year}년 개봉</h3>
        <div className="movie__data">
          <h3 className="movie__title">{
              title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
            }</h3>
          <div>{genres.map(genre => (
            <span>{genre} </span>
          ))}</div>
          <h3>영화 정보</h3>
          <span>{runtime}분 </span>
          <span>평점: {rating}</span>
          <h3>줄거리</h3>
          <div>{summary}</div>
        </div>
      </div>
    </div>
  )
};

// Movie.propTypes = {
//   id: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   poster: PropTypes.string.isRequired,
//   rating: PropTypes.string.isRequired,
//   director: PropTypes.string.isRequired,
//   actor: PropTypes.string.isRequired

// };

export default Movie;
