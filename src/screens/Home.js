
import React, {useState, useEffect} from 'react';
import { View,
        ScrollView,
        SafeAreaView} from 'react-native';
        
import { Divider } from "react-native-elements";
import HeaderTabs from '../containers/home/HeaderTabs'
import SearchBar from '../containers/home/SearchBar'
import Categories from '../containers/home/Categories'
import BottomTabs from '../containers/home/BottomTabs'
import RestaurantItems, { localRestaurants } from '../containers/home/RestaurantItems'



//Client ID
//BYGNYCyA-_aIG7mswksLtQ

//API Key
const YELP_API_KEY ="yqeu85iYaBXDdJhn8obGI3jkEn6xZkNUuOtc2FYgnEMQlBeM6PmTC5Up8-oqnKlaAxZ5BKHf_bInHsgTMvgnQs9pn0pBmqfoZAVZMyxJwlsGFKaKQoNRozpHZ7o8YnYx"


export default function Home({navigation}) {
    
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("Roma");
    const [activeTab, setActiveTab] = useState("pickup");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };
    
        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
          setRestaurantData(
            json.businesses
           
          )
        );
       
      };
    
      useEffect(() => {
        getRestaurantsFromYelp();
      }, [city,activeTab]);
   
   
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityRendler = {setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData = {restaurantData} navigation = {navigation} />
            </ScrollView>
            <Divider width = {1} />
            <BottomTabs />
        </SafeAreaView>
    )
}