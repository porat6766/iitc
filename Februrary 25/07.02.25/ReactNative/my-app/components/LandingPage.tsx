import { Button, Text, View } from 'react-native';
import tw from '../utils/tailwind';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types'

export default function LandingPage() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            <Text style={tw`text-2xl font-bold bg-red-500 p-4 rounded-md text-white`}>
                LandingPage Screen
            </Text>
            <Button
                title="Go to login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
};
