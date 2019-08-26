import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../../constants/Layout";
import { LinearGradient } from "expo-linear-gradient";
import { BG_COLOR, TINT_COLOR } from "../../constants/Colors";
import makePhotoUrl from "../../utils/makePhotoUrl";
import MoviePoster from "../../components/MoviePoster";
import MovieRating from "../../components/MovieRating";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { Platform } from "react-native";

const Container = styled.ScrollView`
    background-color: ${BG_COLOR};
    flex: 1;
`;

const Header = styled.View`
    position: relative;
`;

const BgImage = styled.Image`
    width: ${Layout.width};
    height: ${Layout.height / 3.5};
    opacity: 0.3;
    position: absolute;
    top: 0;
`;

const Content = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    padding-horizontal: 30px;
    height: ${Layout.height / 3.5};
`;

const Column = styled.View`
    margin-left: 20px;
`;

const Title = styled.Text`
    color: ${TINT_COLOR};
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
`;

const MainContent = styled.View`
    padding-horizontal: 20px;
    margin-top: 25px;
`;

const Overview = styled.Text`
    width: 80%;
    color: ${TINT_COLOR};
    font-size: 12px;
    margin-bottom: 10px;
`;

const ContentTitle = styled.Text`
    color: ${TINT_COLOR};
    font-weight: 600;
    margin-bottom: 10px;
`;

const DetailPresenter = ({
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview,
    error,
    loading
}) => (
    <Container>
        <Header>
            <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
            <LinearGradient
                colors={["transparent", "black"]}
                start={Platform.select({
                    ios: [0, 0]
                })}
                end={Platform.select({
                    ios: [0, 0.5],
                    android: [0, 0.9]
                })}
            >
                <Content>
                    <MoviePoster path={posterPhoto} />
                    <Column>
                        <Title>
                            {title.length > 20
                                ? `${title.substring(0, 17)}...`
                                : title}
                        </Title>
                        <MovieRating inSlide={true} votes={voteAvg} />
                    </Column>
                </Content>
            </LinearGradient>
        </Header>
        <MainContent>
            {overview ? (
                <>
                    <ContentTitle>Overview</ContentTitle>
                    <Overview>{overview}</Overview>
                </>
            ) : null}
            {loading ? <Loader /> : null}
            {error ? <Message color="#e74c3c" text={error} /> : null}
        </MainContent>
    </Container>
);

DetailPresenter.propTypes = {
    id: PropTypes.number.isRequired,
    voteAvg: PropTypes.number,
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
