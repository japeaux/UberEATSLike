import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";

import About from '../containers/restaurantDetail/About';
import MenuItems from "../containers/restaurantDetail/MenuItems"
import ViewCart from "../containers/restaurantDetail/ViewCart"


const foods = [
  {
    title: "Lasanha",
    description: "Lasanha italiana a bolanhesa",
    price: "R$33.00",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Frango",
    description:
      "Frango grelhado",
    price: "R$29.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Salada",
    description:
      "Frango SalAda cesar",
    price: "R$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Lasanha",
    description: "Lasanha italiana a bolanhesa",
    price: "R$33.00",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Frango",
    description:
      "Frango grelhado",
    price: "R$29.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Salada",
    description:
      "Frango SalAda cesar",
    price: "R$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },

  {
    title: "Lasanha",
    description: "Lasanha italiana a bolanhesa",
    price: "R$33.00",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Frango",
    description:
      "Frango grelhado",
    price: "R$29.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Salada",
    description:
      "Frango SalAda cesar",
    price: "R$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
 
];

export default function RestaurantDetail({route, navigation}) {
  return (
    <View style={{flex:1}}>
        <About route = {route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuItems restaurantName={route.params.name} foods ={foods} />
        <ViewCart navigation={navigation}/>
    </View>
  );
}