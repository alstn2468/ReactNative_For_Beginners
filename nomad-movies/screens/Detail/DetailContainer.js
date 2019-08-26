import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("title")
        };
    };

    constructor(props) {
        super(props);
        const {
            navigation: {
                state: {
                    params: {
                        id,
                        posterPhoto,
                        backgroundPhoto,
                        title,
                        voteAvg,
                        overview,
                        isMovie
                    }
                }
            }
        } = props;
        this.state = {
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview,
            isMovie,
            error: null,
            loading: true
        };
    }

    async componentDidMount() {
        let error;
        try {
        } catch {
            error = "Can't get detail information";
        } finally {
            this.setState({ loading: false, error });
        }
    }

    render() {
        const {
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview,
            error,
            loading
        } = this.state;
        return (
            <DetailPresenter
                id={id}
                posterPhoto={posterPhoto}
                backgroundPhoto={backgroundPhoto}
                title={title}
                voteAvg={voteAvg}
                overview={overview}
                loading={loading}
                error={error}
            ></DetailPresenter>
        );
    }
}
