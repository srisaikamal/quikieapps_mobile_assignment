import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import HeroCard from "../components/HeroCard";
import googleLogo from "../assets/GOOGL.png";
import fbLogo from "../assets/FB.png";
import amznLogo from "../assets/Group.png";
const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <HeroCard image={googleLogo} title={"GOOGL"} price="1515" />
        <HeroCard image={fbLogo} title={"FB"} price="266" />
        <HeroCard image={amznLogo} title={"AMZN"} price="3116" />
        <Button
          onPress={() => navigation.navigate("Views")}
          style={{
            width: "50%",
            backgroundColor: "#6D5BD0",
            height: 45,
            paddingVertical: 3,
          }}
          mode="contained"
        >
          Saved data
        </Button>
      </View>
    </View>
  );
};

export default Home;
