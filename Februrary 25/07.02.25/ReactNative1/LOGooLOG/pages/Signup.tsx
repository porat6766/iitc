import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from '../utils/tailwind';

const SignupScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={tw`flex-1 justify-center items-center bg-gray-100 p-6`}>
            <Text style={tw`text-2xl font-bold text-blue-600 mb-4`}>Sign Up</Text>
            <TextInput
                style={tw`w-full p-3 bg-white rounded-lg mb-3 border border-gray-300`}
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
            />
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
            <Button title="Sign Up" onPress={() => alert('Account Created')} />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={tw`mt-4 text-blue-500`}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignupScreen;
