import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movies, tv } from "../../api";

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
        const { isMovie, id } = this.state;
        let error, genres, overview, status, date, title, backgroundPhoto;
        try {
            if (isMovie) {
                ({
                    data: {
                        genres,
                        overview,
                        status,
                        release_date: date,
                        backdrop_path: backgroundPhoto
                    }
                } = await movies.getMovie(id));
            } else {
                ({
                    data: {
                        genres,
                        overview,
                        status,
                        first_air_date: date,
                        title: name,
                        backdrop_path: backgroundPhoto
                    }
                } = await tv.getShow(id));
            }
        } catch (error) {
            console.log(error);
            error = "Can't get detail information";
        } finally {
            this.setState({
                loading: false,
                genres,
                backgroundPhoto,
                overview,
                status,
                date,
                error
            });
        }
    }

    render() {
        const {
            isMovie,
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview,
            loading,
            date,
            status,
            genres,
            error
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
                date={date}
                status={status}
                isMovie={isMovie}
                genres={genres}
                error={error}
            ></DetailPresenter>
        );
    }
}
