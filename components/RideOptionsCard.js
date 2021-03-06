import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { Image } from 'react-native-elements/dist/image/Image'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames';
import { selectTravelTimeInformation } from '../slices/navSlice'

const data = [
    {
        is: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://link.papareact.com/3pn",
    },
        {
        is: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://link.papareact.com/5w8",
    },
        {
        is: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://link.papareact.com/7pf",
    },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity 
                onPress={() => navigation.navigate("NavigationCard")} 
                style={tw`absolute top-3 left-5 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawsome" />
                </TouchableOpacity>
                    <Text style={tw`text-center py-5 text-xl`}>Select a Ride - 
                    {travelTimeInformation?.distance?.text}</Text>
            </View>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image }}) => {
                    <TouchableOpacity
                    onPress={() => setSelected(item)} 
                    style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}>
                        <Image 
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{ uri: image }}
                        />   
                        <View style={tw`-m-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text} Trave Time</Text>
                        </View> 
                        <View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('ar', {
                                style: "currency",
                                currency: "AED"
                            }).format (
                                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
                            )}

                        </Text> 
                        </View>           
                    </TouchableOpacity>
                }}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity>
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
