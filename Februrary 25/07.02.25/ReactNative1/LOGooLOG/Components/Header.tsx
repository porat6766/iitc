import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import tw from '../utils/tailwind';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RoutesType = {
    Login: undefined;
    Signup: undefined;
    Recepies: undefined;
};

const Header = () => {
    const navigation = useNavigation<StackNavigationProp<RoutesType>>();

    return (
        <View style={tw`bg-blue-500 p-4 flex-row justify-between items-center shadow-lg`}>
            <View style={tw`flex-row items-center`}>
                <Image
                    style={tw`w-10 h-10 mr-3 rounded-full`}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJubXDaT-Vhu8oKFvEKsEipo58f-nWO2nHg&s' }}
                    resizeMode="cover"
                />
                <Text style={tw`text-white text-lg font-bold`}>
                    Home
                </Text>
            </View>

            <View style={tw`flex-row gap-2`}>
                <TouchableOpacity style={tw`bg-white px-3 py-2 rounded-md`} onPress={() => navigation.navigate("Login")}>
                    <Text style={tw`text-blue-500 font-semibold`}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`bg-white px-3 py-2 rounded-md`} onPress={() => navigation.navigate("Signup")}>
                    <Text style={tw`text-blue-500 font-semibold`}>Signup</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`bg-white px-3 py-2 rounded-md`} onPress={() => navigation.navigate("Recepies")}>
                    <Text style={tw`text-blue-500 font-semibold`}>Recipes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
