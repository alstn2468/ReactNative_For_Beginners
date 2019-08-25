import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        loading: false,
        tvResults: null,
        movieResults: null,
        searchTerm: ""
    };

    handleSearchUpdate = text => {
        this.setState({ searchTerm: text });
    };

    render() {
        const {
            loading,
            tvResults,
            movieResults,
            searchTerm,
            handleSearchUpdate
        } = this.state;
        return (
            <SearchPresenter
                loading={loading}
                tvResults={tvResults}
                movieResults={movieResults}
                searchTerm={searchTerm}
                handleSearchUpdate={this.handleSearchUpdate}
            />
        );
    }
}
