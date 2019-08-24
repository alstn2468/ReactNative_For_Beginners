import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const DetailPresenter = ({ loading }) =>
    loading ? <Loader /> : <Text>Detail</Text>;

DetailPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
