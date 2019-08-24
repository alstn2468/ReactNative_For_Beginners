import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
    state = {
        loading: true
    };

    render() {
        const { loading } = this.state;
        return <DetailPresenter loading={loading} />;
    }
}
