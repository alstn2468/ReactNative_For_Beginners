import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({
    id,
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview
}) => null;

DetailPresenter.propTypes = {
    id: PropTypes.number.isRequired,
    voteAvg: PropTypes.number,
    posterPhoto: PropTypes.string,
    backgroundPhoto: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string
};

export default DetailPresenter;
