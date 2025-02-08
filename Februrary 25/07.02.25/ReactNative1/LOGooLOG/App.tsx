import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import Article from "./pages/Article"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Recepies from "./pages/Recepies"
import Header from './Components/Header';
import { View } from 'react-native';
import tw from './utils/tailwind';

const Stack = createStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(false)

  const linking = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        Article: {
          path: 'article',
          screens: {
            Login: 'login',
            Signup: 'signup',
          }
        }
      }
    }
  };

  return (
    <NavigationContainer linking={linking}>
      <View style={tw`w-full`}>
        <Header />
        <Stack.Navigator initialRouteName="Article" screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Article" component={Article} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Recepies" component={Recepies} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>);
}