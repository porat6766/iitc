import { Text, View, TouchableOpacity } from "react-native";
import tw from "../utils/tailwind";
import { useUser } from "../context/UserContext";
import { useEffect } from "react";

const Home = ({ isLogin, setIsLogin }: { isLogin: boolean, setIsLogin: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { login, user } = useUser();

    const user_1 = { name: "slomo", email: "ddat@gmail.com" }
    const user_2 = { name: "MIAOOO", email: "Mama@gmail.com" }
    useEffect(() => {
        login(user_1)
    }, [])

    const changeUser = () => {
        login(user_2)
    }

    return (
        <View style={tw`p-4`}>
            <Text>{user?.name}</Text>
            <Text>{user?.email}</Text>
            <TouchableOpacity onPress={() => setIsLogin(prev => !prev)} style={tw`mb-3 bg-red-500 self-start px-4 py-2 rounded-md`}>
                <Text style={tw`text-white font-bold`}>{isLogin ? "Connected" : "Not Connected"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsLogin(prev => !prev)} style={tw`mb-3 bg-red-500 self-start px-4 py-2 rounded-md`}>
                <Text style={tw`text-white font-bold`}>{isLogin ? "Connected" : "Not Connected"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsLogin(prev => !prev)} style={tw`mb-3 bg-red-500 self-start px-4 py-2 rounded-md`}>
                <Text style={tw`text-white font-bold`}>{isLogin ? "Connected" : "Not Connected"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeUser()} style={tw`mb-3 bg-red-500 self-start px-4 py-2 rounded-md`}>
                <Text>Change User</Text>
            </TouchableOpacity>
            <Text style={tw`bg-red-500 self-start px-4 py-2 mt-4 rounded-md`}>Home😜</Text>
        </View>
    );
}

export default Home;