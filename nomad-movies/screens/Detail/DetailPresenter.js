import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../../constants/Layout";
import { BG_COLOR, TINT_COLOR } from "../../constants/Colors";
import makePhotoUrl from "../../utils/makePhotoUrl";
import MoviePoster from "../../components/MoviePoster";

const Container = styled.ScrollView`
    background-color: ${BG_COLOR};
    flex: 1;
`;

const Header = styled.View`
    position: relative;
`;

const BgImage = styled.Image`
    width: ${Layout.width};
    height: ${Layout.height / 3};
    opacity: 0.3;
    position: absolute;
    top: 0;
`;

const Content = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    padding-horizontal: 30px;
    height: ${Layout.height / 3};
`;

const Column = styled.View`
    margin-left: 20px;
`;

const Title = styled.Text`
    color: ${TINT_COLOR};
    font-weight: 600;
    font-size: 14px;
`;

const DetailPresenter = ({
    id,
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview
}) => (
    <Container>
        <Header>
            <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
            <Content>
                <MoviePoster path={posterPhoto} />
                <Column>
                    <Title>
                        {title.length > 25
                            ? `${title.substring(0, 22)}...`
                            : title}
                    </Title>
                </Column>
            </Content>
        </Header>
    </Container>
);

DetailPresenter.propTypes = {
    id: PropTypes.number.isRequired,
    voteAvg: PropTypes.number,
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string
};

export default DetailPresenter;
