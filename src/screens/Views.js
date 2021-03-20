import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import Tablecomp from "../components/Tablecomp";

const Views = ({ navigation }) => {
  return (
    <View>
      <Tablecomp />

      <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
        <Button
          onPress={() => navigation.pop()}
          style={{
            width: "50%",
            backgroundColor: "#6D5BD0",
            height: 45,
            paddingVertical: 3,
          }}
          mode="contained"
        >
          Back
        </Button>

        <Button
          onPress={() => console.log("hello")}
          style={{
            width: "50%",
            backgroundColor: "#6D5BD0",
            height: 45,
            paddingVertical: 3,
            marginTop: 40,
          }}
          mode="contained"
        >
          Refresh Data
        </Button>
      </View>
    </View>
  );
};

export default Views;
