import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        loading: true
    };

    render() {
        const { loading } = this.state;
        return <SearchPresenter loading={loading} />;
    }
}
