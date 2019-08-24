import React from "react";
import TVPresenter from "./TVPresenter";
import { tv } from "../../api";

export default class extends React.Component {
    state = {
        loading: true,
        popular: null,
        topRated: null,
        airingToday: null,
        error: null
    };

    async componentDidMount() {
        let popular, topRated, airingToday, error;
        try {
            ({
                data: { results: popular }
            } = await tv.getPopular());
            ({
                data: { results: topRated }
            } = await tv.getTopRated());
            ({
                data: { results: airingToday }
            } = await tv.getAiringToday());
        } catch (error) {
            console.log(error);
            error = "Can't get TV Shows.";
        } finally {
            this.setState({
                loading: false,
                popular,
                topRated,
                airingToday,
                error
            });
        }
    }

    render() {
        const { loading, popular, topRated, airingToday, error } = this.state;
        return (
            <TVPresenter
                loading={loading}
                popular={popular}
                topRated={topRated}
                airingToday={airingToday}
                error={error}
            />
        );
    }
}
