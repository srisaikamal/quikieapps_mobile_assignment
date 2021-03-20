import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Image } from "react-native";
import Home from "./src/screens/Home";
import Views from "./src/screens/Views";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "#031C47" } }}
      >
        <Stack.Screen
          name="Home"
          options={{
            title: "",
            headerTitle: () => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: 5,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ height: 50, width: 100 }}
                  source={require("./src/assets/logo.png")}
                />
              </View>
            ),
          }}
          component={Home}
        />
        <Stack.Screen
          name="Views"
          options={{
            title: "",
            headerTitle: () => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: 5,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ height: 50, width: 100 }}
                  source={require("./src/assets/logo.png")}
                />
              </View>
            ),
          }}
          component={Views}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
