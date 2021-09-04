import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const RideOptionsCard = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("NavigationCard")} style={tw`absolute top-3 left-5 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawsome" />
                </TouchableOpacity>
                    <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
