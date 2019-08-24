import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying, error }) =>
    loading ? (
        <Loader />
    ) : (
        <>
            <Text>Movies</Text>
        </>
    );

MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    nowPlaying: PropTypes.array,
    error: PropTypes.string
};

export default MoviesPresenter;
