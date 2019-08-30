import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

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

        if (hasPermission) {
            return (
                <View>
                    <Text>Has Permission</Text>
                </View>
            );
        } else if (hasPermission === false) {
            return (
                <View>
                    <Text>Don't have Permission for this App.</Text>
                </View>
            );
        } else {
            return <ActivityIndicator />;
        }
    }
}
