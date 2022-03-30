import React, { useState, useEffect } from 'react';
import { View,
        Text,
        TouchableOpacity,
    } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function SearchBar({cityRendler}) {
    return (
        <View style={{marginTop: 15, flexDirection: "row"}}>
          <GooglePlacesAutocomplete 
            query={{key: 'AIzaSyAYB4FPIsv-5KUnIfEQtS0pnpQ7NBIzEPI'}}
            onPress = {(data, details = null) =>{
                const city = data.description.split(',')[0];
                console.log(city)
                cityRendler(city)
            }}
            placeholder='Search'
            styles={{
                textInput: {
                    backgroundColor: "#eee",
                    borderRadius: 20,
                    fontWeight: "700",
                    marginTop: 7,
                },
                textInputContainer: {
                    backgroundColor: "#eee",
                    borderRadius: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 10,
                },
            }}

            renderLeftButton={() => (
                <View style={{ marginLeft: 10 }}>
                    <Ionicons name="location-sharp" size={24} />
                </View>
            )}

            renderRightButton={() => (
                <View
                    style={{
                    flexDirection: "row",
                    marginRight: 8,
                    backgroundColor: "white",
                    padding: 9,
                    borderRadius: 30,
                    alignItems: "center",
                    }}
                >
                     <AntDesign
                        name="clockcircle"
                        size={11}
                        style={{ marginRight: 6 }}
                    />
                    <Text>Search</Text>
                </View>
            )}
            
          />
        </View>
    )
}
