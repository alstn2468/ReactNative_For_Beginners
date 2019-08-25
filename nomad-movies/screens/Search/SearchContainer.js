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

    onSubmitEditing = () => {
        const { searchTerm } = this.state;

        if (searchTerm !== "") {
            alert("Searhing");
            return;
        }
    };

    render() {
        const { loading, tvResults, movieResults, searchTerm } = this.state;
        return (
            <SearchPresenter
                loading={loading}
                tvResults={tvResults}
                movieResults={movieResults}
                searchTerm={searchTerm}
                onSubmitEditing={this.onSubmitEditing}
                handleSearchUpdate={this.handleSearchUpdate}
            />
        );
    }
}
