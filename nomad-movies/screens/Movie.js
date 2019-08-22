import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default ({ navigation }) => (
  <>
    <Text>Movie</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Text>Go to Datail</Text>
    </TouchableOpacity>
  </>
);
