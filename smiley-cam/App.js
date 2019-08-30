import React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import styled from "styled-components";

const { width, height } = Dimensions.get("window");

const CenterView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: cornflowerblue;
`;

const Text = styled.Text`
    color: white;
    font-size: 22px;
`;

export default class App extends React.Component {
    state = {
        hasPermission: null
    };

    componentDidMount = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status === "granted") {
            this.setState({ hasPermission: true });
        } else {
            this.setState({ hasPermission: false });
        }
    };

    render() {
        const { hasPermission } = this.state;

        if (hasPermission === true) {
            return (
                <CenterView>
                    <Camera
                        style={{
                            width: width - 40,
                            height: height / 1.5,
                            borderRadius: 10,
                            overflow: "hidden"
                        }}
                    />
                </CenterView>
            );
        } else if (hasPermission === false) {
            return (
                <CenterView>
                    <Text>Don't have Permission for this App.</Text>
                </CenterView>
            );
        } else {
            return (
                <CenterView>
                    <ActivityIndicator color="white" size={1} />
                </CenterView>
            );
        }
    }
}
