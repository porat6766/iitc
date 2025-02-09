import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from '../utils/tailwind';
import { useUser } from '../context/UserContext';

const Login = () => {
    const { user } = useUser();
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={tw`flex-1 justify-center items-center bg-gray-100 p-6`}>
            {user?.name && <Text style={tw`text-2xl font-bold text-blue-600 mb-4`}>In this moment this user is{user?.name}</Text>
            }            <Text style={tw`text-2xl font-bold text-blue-600 mb-4`}>Login</Text>
            <TextInput
                style={tw`w-full p-3 bg-white rounded-lg mb-3 border border-gray-300`}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={tw`w-full p-3 bg-white rounded-lg mb-3 border border-gray-300`}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={() => alert('Login Successful')} />
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={tw`mt-4 text-blue-500`}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
