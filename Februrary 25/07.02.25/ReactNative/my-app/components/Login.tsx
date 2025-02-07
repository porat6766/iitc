import { Button, Text, View } from "react-native";
import tw from "../utils/tailwind";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";

export default function LoginPage() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View>
            <Text style={tw`bg-red`}>Login Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('landing')} />
        </View>
    );
};
