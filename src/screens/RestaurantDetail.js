import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";

import About from '../containers/restaurantDetail/About';
import MenuItems from "../containers/restaurantDetail/MenuItems"
import ViewCart from "../containers/restaurantDetail/ViewCart"



export default function RestaurantDetail({route, navigation}) {
  return (
    <View style={{flex:1}}>
        <About route = {route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuItems restaurantName={route.params.name} />
        <ViewCart navigation={navigation} restaurantName={route.params.name}/>
    </View>
  );
}