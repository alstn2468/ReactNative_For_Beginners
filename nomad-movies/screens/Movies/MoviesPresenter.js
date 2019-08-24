import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/Loader";
import MovieSlider from "../../components/MovieSlider";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.ScrollView`
    background-color: ${BG_COLOR};
`;

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying, error }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <MovieSlider movies={upcoming} />
        </Container>
    );

MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    nowPlaying: PropTypes.array,
    error: PropTypes.string
};

export default MoviesPresenter;
