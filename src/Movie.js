import React from "react";
import PropTypes from "prop-types";

//This file does not need "state" Therefore, it doesn't require a class component and can be used with a function component
function Movie({ id, year, title, summary, poster }) {
    return <h4>{title}</h4>;

}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie; 