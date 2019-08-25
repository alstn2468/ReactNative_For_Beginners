import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import { BG_COLOR, TINT_COLOR } from "../../constants/Colors";

const Container = styled.View`
    background-color: ${BG_COLOR};
    flex: 1;
`;

const Input = styled.TextInput`
    color: ${TINT_COLOR};
`;

const SearchPresenter = ({
    loading,
    tvResults,
    movieResult,
    searchTerm,
    handleSearchUpdate
}) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <Input
                value={searchTerm}
                autoFocus
                returnKeyType={"search"}
                onChangeText={handleSearchUpdate}
            />
        </Container>
    );

SearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    handleSearchUpdate: PropTypes.func.isRequired,
    searchTerm: PropTypes.string,
    tvResults: PropTypes.array,
    movieResult: PropTypes.array
};

export default SearchPresenter;
