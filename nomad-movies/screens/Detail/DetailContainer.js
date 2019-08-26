import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
    state = {
        loading: false
    };

    async componentDidMount() {
        try {
        } catch {
            error = "Can't get detail information.";
        } finally {
            this.setState({});
        }
    }

    render() {
        const { loading } = this.state;
        return <DetailPresenter loading={loading} />;
    }
}
