import React from "react";
import { Avatar, Button, Card, Title } from "react-native-paper";
import { Image, View } from "react-native";

const HeroCard = ({ image, title, price }) => {
  return (
    <Card
      style={{
        width: "85%",
        height: 200,
        marginVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Title style={{ fontSize: 25 }}>{title}</Title>
        <Image
          resizeMode="contain"
          style={{ height: 70, width: 100 }}
          source={image}
        />
      </View>
      <Title style={{ fontSize: 30, textAlign: "center", marginTop: 40 }}>
        {price} USD
      </Title>
    </Card>
  );
};

export default HeroCard;
